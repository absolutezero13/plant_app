import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isSubscriber: boolean;
};

const initialState: UserState = {
  isSubscriber: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: () => initialState,
    setSubscriberStatus: (state, action: PayloadAction<boolean>) => {
      state.isSubscriber = action.payload;
    },
  },
});

export const { resetUserState, setSubscriberStatus } = userSlice.actions;

export default userSlice.reducer;
