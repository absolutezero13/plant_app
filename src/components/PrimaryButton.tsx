import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import { AdaptiveGlass } from "@/components/AdaptiveGlass";
import { Colors, ControlSize, Radius, Typography } from "@/constants/theme";

type PrimaryButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
}: PrimaryButtonProps) {
  const isDisabled = disabled || loading;
  const surfaceColor = isDisabled
    ? Colors.light.primaryDisabled
    : Colors.light.primary;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      onPress={onPress}
    >
      <AdaptiveGlass
        colorScheme="light"
        fallbackColor={surfaceColor}
        glassEffectStyle="regular"
        isInteractive={!isDisabled}
        style={styles.surface}
        tintColor={surfaceColor}
      >
        {loading ? (
          <ActivityIndicator color={Colors.light.onPrimary} />
        ) : (
          <Text style={styles.label}>{title}</Text>
        )}
      </AdaptiveGlass>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  surface: {
    minHeight: ControlSize.primaryButtonHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Radius.medium,
  },
  label: {
    ...Typography.buttonLabel,
    color: Colors.light.onPrimary,
  },
});
