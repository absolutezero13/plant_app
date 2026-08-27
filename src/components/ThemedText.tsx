import { StyleSheet, Text, type TextProps } from "react-native";

import { Colors, ThemeColor, Typography } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "small"
    | "smallBold"
    | "subtitle"
    | "link"
    | "linkPrimary";
  themeColor?: ThemeColor;
};

export function ThemedText({
  style,
  type = "default",
  themeColor,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[{ color: theme[themeColor ?? "text"] }, styles[type], style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    ...Typography.bodySmallStrong,
  },
  smallBold: {
    ...Typography.bodySmallStrong,
    ...Typography.emphasis,
  },
  default: {
    ...Typography.bodyStrong,
  },
  title: {
    ...Typography.displayLarge,
  },
  subtitle: {
    ...Typography.display,
  },
  link: {
    ...Typography.link,
  },
  linkPrimary: {
    ...Typography.link,
    color: Colors.light.primary,
  },
});
