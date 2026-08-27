/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import "@/global.css";

import { Platform, type TextStyle } from "react-native";

export const Colors = {
  light: {
    text: "#13231B",
    background: "#FFFFFF",
    backgroundElement: "#F0F0F3",
    backgroundSelected: "#E0E1E6",
    surfaceMuted: "#F5F8F6",
    textSecondary: "#52645B",
    textTertiary: "#858585",
    primary: "#28AF6E",
    primaryDisabled: "#8BD7B2",
    onPrimary: "#FFFFFF",
    indicator: "#13231B",
    indicatorMuted: "#D6DBD8",
    premiumBackground: "#0B1A14",
    premiumSurface: "rgba(255, 255, 255, 0.08)",
    premiumSurfaceSelected: "rgba(40, 175, 110, 0.16)",
    premiumGlassTint: "#183026",
    premiumText: "#FFFFFF",
    premiumTextSecondary: "rgba(255, 255, 255, 0.72)",
    premiumTextTertiary: "rgba(255, 255, 255, 0.48)",
    premiumOutline: "rgba(255, 255, 255, 0.12)",
    premiumScrim: "rgba(7, 22, 16, 0.30)",
  },
};

export type ThemeColor = keyof typeof Colors.light;

export const Fonts = {
  regular: "Rubik_400Regular",
  medium: "Rubik_500Medium",
  semibold: "Rubik_600SemiBold",
  bold: "Rubik_700Bold",
  mono: Platform.select({
    ios: "ui-monospace",
    web: "var(--font-mono)",
    default: "monospace",
  })!,
};

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
};

export const Radius = {
  small: 8,
  medium: 12,
  large: 16,
  full: 9999,
};

export const ControlSize = {
  primaryButtonHeight: 56,
};

export const Opacity = {
  pressed: 0.82,
  disabled: 0.45,
};

export const Typography = {
  welcomeTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: Fonts.regular,
    letterSpacing: -0.35,
  },
  welcomeTitleStrong: {
    fontFamily: Fonts.bold,
  },
  welcomeBody: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: Fonts.regular,
  },
  buttonLabel: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: Fonts.semibold,
  },
  legal: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: Fonts.regular,
  },
  onboardingTitle: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: Fonts.regular,
    letterSpacing: -0.5,
  },
  onboardingTitleStrong: {
    fontFamily: Fonts.bold,
  },
  premiumTitle: {
    fontSize: 26,
    lineHeight: 32,
    fontFamily: Fonts.regular,
    letterSpacing: -0.4,
  },
  premiumTitleStrong: {
    fontFamily: Fonts.bold,
  },
  premiumSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: Fonts.regular,
  },
  premiumFeatureTitle: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: Fonts.semibold,
  },
  premiumFeatureCaption: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: Fonts.regular,
  },
  premiumPlanTitle: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.semibold,
  },
  premiumPlanDetail: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: Fonts.regular,
  },
  premiumFootnote: {
    fontSize: 9,
    lineHeight: 12,
    fontFamily: Fonts.regular,
  },
} as const satisfies Record<string, TextStyle>;

export const WelcomeGradient = [
  Colors.light.background,
  "rgba(192, 240, 255, 0.10)",
  Colors.light.background,
];

export const BottomTabInset = Platform.select({ ios: 50, default: 80 });
export const MaxContentWidth = 800;
