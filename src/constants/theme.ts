import { Dimensions, Platform, type TextStyle } from "react-native";

export const IS_SMALL_SCREEN = Dimensions.get("window").height < 700;
export const SCREEN_WIDTH = Dimensions.get("window").width;

export const Colors = {
  light: {
    text: "#13231B",
    background: "#FFFFFF",
    backgroundTransparent: "#FFFFFF00",
    backgroundElement: "#F0F0F3",
    backgroundSelected: "#E0E1E6",
    surfaceMuted: "#F5F8F6",
    textSecondary: "#13231BB2",
    textTertiary: "#858585",
    legalText: "#597165B3",
    primary: "#28AF6E",
    primaryDisabled: "#8BD7B2",
    onPrimary: "#FFFFFF",
    indicator: "#13231B",
    indicatorMuted: "#13231B40",
    premiumBackground: "#101E17",
    premiumSurface: "#FFFFFF14",
    premiumSurfaceSelected: "#28AF6E2B",
    premiumSurfaceTransparent: "#28AF6E00",
    premiumFeatureStart: "#25322B",
    premiumFeatureEnd: "#23302A",
    premiumPlanSurface: "#FFFFFF00",
    premiumIconBackground: "#0000003D",
    premiumCloseBackground: "#00000066",
    premiumGlassTint: "#183026",
    premiumText: "#FFFFFF",
    premiumTextSecondary: "#FFFFFFB2",
    premiumTextTertiary: "#FFFFFF85",
    premiumPlanDetail: "#FFFFFFCC",
    premiumTerms: "#FFFFFF80",
    premiumOutline: "#FFFFFF70",
    premiumRadioOutline: "#FFFFFFAA",
    premiumScrim: "#0716104D",
  },
};

export type ThemeColor = keyof typeof Colors.light;

export const Fonts = {
  regular: "Rubik_400Regular",
  medium: "Rubik_500Medium",
  semibold: "Rubik_600SemiBold",
  bold: "Rubik_700Bold",
  extraBold: "Rubik_800ExtraBold",
  sfProText: Platform.select({ ios: "system-ui", default: "System" }),
};

export const Spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 24,
  xl: 32,
  xxl: 64,
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
  displayLarge: {
    fontSize: 48,
    lineHeight: 52,
    fontFamily: Fonts.semibold,
  },
  display: {
    fontSize: 32,
    lineHeight: 44,
    fontFamily: Fonts.semibold,
  },
  hero: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: Fonts.regular,
    letterSpacing: -0.5,
  },
  headingLarge: {
    fontSize: 28,
    lineHeight: 28,
    fontFamily: Fonts.medium,
  },
  headingLargeStrong: {
    fontSize: 28,
    lineHeight: 28,
    fontFamily: Fonts.extraBold,
  },
  titleLarge: {
    fontSize: 26,
    lineHeight: 32,
    fontFamily: Fonts.regular,
    letterSpacing: -0.4,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: Fonts.regular,
    letterSpacing: -0.35,
  },
  titleSmall: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.medium,
    letterSpacing: 0.38,
  },
  emphasis: {
    fontFamily: Fonts.bold,
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: Fonts.regular,
  },
  bodyStrong: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.medium,
  },
  body: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: Fonts.regular,
  },
  bodySmallStrong: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.medium,
  },
  bodySmall: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: Fonts.regular,
  },
  label: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: Fonts.semibold,
  },
  buttonLabel: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: Fonts.sfProText,
    fontWeight: "700",
    letterSpacing: -0.24,
    textAlign: "center",
  },
  labelSmall: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.semibold,
  },
  captionStrong: {
    fontSize: 13,
    lineHeight: 17,
    fontFamily: Fonts.semibold,
  },
  captionLarge: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: Fonts.regular,
    letterSpacing: -0.08,
  },
  caption: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: Fonts.regular,
  },
  finePrint: {
    fontSize: 11,
    lineHeight: 15,
    fontFamily: Fonts.regular,
    letterSpacing: 0.07,
    textAlign: "center",
  },
  footnote: {
    fontSize: 9,
    lineHeight: 12,
    fontFamily: Fonts.regular,
  },
  link: {
    fontSize: 14,
    lineHeight: 30,
    fontFamily: Fonts.regular,
  },
} as const satisfies Record<string, TextStyle>;
