import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isLoggedIn: boolean;
  isSubscriber: boolean;
};

const initialState: UserState = {
  isLoggedIn: false,
  isSubscriber: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    restoreUserState: (_state, action: PayloadAction<UserState>) =>
      action.payload,
    resetUserState: () => initialState,
    setLoggedInStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setSubscriberStatus: (state, action: PayloadAction<boolean>) => {
      state.isSubscriber = action.payload;
    },
  },
});

export const {
  resetUserState,
  restoreUserState,
  setLoggedInStatus,
  setSubscriberStatus,
} = userSlice.actions;

export default userSlice.reducer;
