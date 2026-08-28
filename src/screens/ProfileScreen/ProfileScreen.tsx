import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Colors, Radius, Spacing, Typography } from "@/constants/theme";
import type { AppDispatch, RootState } from "@/store/store";
import { resetUserState } from "@/store/userSlice";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const isSubscriber = useSelector(
    (state: RootState) => state.user.isSubscriber,
  );

  const confirmDataReset = () => {
    Alert.alert(
      "Reset data?",
      "This will reset your login and subscription status.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => dispatch(resetUserState()),
        },
      ],
    );
  };

  return (
    <View style={[styles.screen, { paddingTop: top }]}>
      <StatusBar style="dark" />
      <Text accessibilityRole="header" style={styles.title}>
        Profile
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Subscription status</Text>
        <Text selectable style={styles.value}>
          {isSubscriber ? "Premium subscriber" : "Free account"}
        </Text>

        <Pressable
          accessibilityRole="button"
          onPress={confirmDataReset}
          style={styles.resetButton}
        >
          <Text style={styles.resetLabel}>Reset data</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light.background,
    flex: 1,
    paddingHorizontal: Spacing.lg,
  },
  title: {
    ...Typography.title,
    color: Colors.light.text,
    fontFamily: Typography.emphasis.fontFamily,
  },
  card: {
    alignItems: "flex-start",
    backgroundColor: Colors.light.surfaceMuted,
    borderColor: Colors.light.surfaceBorder,
    borderCurve: "continuous",
    borderRadius: Radius.large,
    borderWidth: 1,
    gap: Spacing.sm,
    padding: Spacing.lg,
    marginTop: Spacing.lg,
  },
  label: {
    ...Typography.bodySmall,
    color: Colors.light.textSecondary,
  },
  value: {
    ...Typography.bodyStrong,
    color: Colors.light.text,
  },
  resetButton: {
    backgroundColor: Colors.light.primary,
    borderRadius: Radius.full,
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
  },
  resetLabel: {
    ...Typography.bodySmallStrong,
    color: Colors.light.onPrimary,
  },
});
