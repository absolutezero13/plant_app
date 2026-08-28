export type PaywallSource = "onboarding" | "tabs";

export type PaywallExit = "completeOnboarding" | "goBack";

export const getPaywallExit = (
  source: PaywallSource | undefined,
): PaywallExit => (source === "tabs" ? "goBack" : "completeOnboarding");
