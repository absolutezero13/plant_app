import { getPaywallExit } from "@/screens/PaywallScreen/paywallNavigation";

describe("getPaywallExit", () => {
  it("goes back when paywall was opened from the tabs", () => {
    expect(getPaywallExit("tabs")).toBe("goBack");
  });

  it("completes onboarding for every onboarding entry", () => {
    expect(getPaywallExit("onboarding")).toBe("completeOnboarding");
    expect(getPaywallExit(undefined)).toBe("completeOnboarding");
  });
});
