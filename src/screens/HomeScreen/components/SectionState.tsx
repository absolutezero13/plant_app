import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors, Spacing, Typography } from "@/constants/theme";

type SectionStateProps = {
  emptyMessage: string;
  error: string | null;
  onRetry: () => void;
  style?: StyleProp<ViewStyle>;
};

export function SectionState({
  emptyMessage,
  error,
  onRetry,
  style,
}: SectionStateProps) {
  if (error) {
    return (
      <View style={[styles.container, style]}>
        <Text selectable style={styles.errorText}>
          {error}
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={onRetry}
          style={styles.retryButton}
        >
          <Text style={styles.retryLabel}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <Text selectable style={styles.emptyText}>
        {emptyMessage}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: Spacing.sm,
    justifyContent: "center",
    minHeight: 64,
    paddingHorizontal: Spacing.lg,
  },
  emptyText: {
    ...Typography.body,
    color: Colors.light.textMuted,
    lineHeight: 18,
    textAlign: "center",
  },
  errorText: {
    ...Typography.body,
    color: Colors.light.textMuted,
    lineHeight: 18,
    textAlign: "center",
  },
  retryButton: {
    padding: 0,
  },
  retryLabel: {
    ...Typography.body,
    color: Colors.light.text,
    fontFamily: Typography.bodyMedium.fontFamily,
    lineHeight: 18,
  },
});
