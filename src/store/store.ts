import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";

import StorageService from "@/services/StorageService";
import userReducer, {
  resetUserState,
  restoreUserState,
  setLoggedInStatus,
  setSubscriberStatus,
  type UserState,
} from "@/store/userSlice";

const USER_STORAGE_KEY = "user";
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
        USER_STORAGE_KEY,
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

let hydrationPromise: Promise<void> | null = null;

export const hydrateStore = (): Promise<void> => {
  if (!hydrationPromise) {
    hydrationPromise = StorageService.get(USER_STORAGE_KEY)
      .then((userState) => {
        if (userState) {
          store.dispatch(restoreUserState(userState));
        }
      })
      .catch((error) => {
        console.warn("Unable to restore user state.", error);
      });
  }

  return hydrationPromise;
};
