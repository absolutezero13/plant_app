import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";

import StorageService, { StorageKeys } from "@/services/StorageService";
import userReducer, {
  resetUserState,
  restoreUserState,
  setLoggedInStatus,
  setSubscriberStatus,
  type UserState,
} from "@/store/userSlice";

type StoreState = { user: UserState };

const userPersistenceListener = createListenerMiddleware<StoreState>();

userPersistenceListener.startListening({
  matcher: isAnyOf(
    resetUserState,
    setLoggedInStatus,
    setSubscriberStatus,
  ),
  effect: async (_action, listenerApi) => {
    try {
      await StorageService.set(
        StorageKeys.user,
        listenerApi.getState().user,
      );
    } catch (error) {
      console.warn("Unable to save user state.", error);
    }
  },
});

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(userPersistenceListener.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const hydrateStore = async (): Promise<void> => {
  try {
    const userState = await StorageService.get(StorageKeys.user);

    if (userState) {
      store.dispatch(restoreUserState(userState));
    }
  } catch (error) {
    console.warn("Unable to restore user state.", error);
  }
};
