import userReducer, {
  resetUserState,
  setLoggedInStatus,
  setSubscriberStatus,
} from "@/store/userSlice";

describe("userSlice", () => {
  it("updates login and subscription status", () => {
    const loggedInState = userReducer(undefined, setLoggedInStatus(true));
    const subscribedState = userReducer(
      loggedInState,
      setSubscriberStatus(true),
    );

    expect(subscribedState).toEqual({
      isLoggedIn: true,
      isSubscriber: true,
    });
  });

  it("resets the user state", () => {
    const currentState = { isLoggedIn: true, isSubscriber: true };

    expect(userReducer(currentState, resetUserState())).toEqual({
      isLoggedIn: false,
      isSubscriber: false,
    });
  });
});
