import { MaskedView } from "@expo/ui/community/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { Colors, Radius, Spacing, Typography } from "@/constants/theme";
import {
  SubscriptionChevronIcon,
  SubscriptionLetterIcon,
} from "@/screens/HomeScreen/assets";
import type { RootState } from "@/store/store";

function SubscriptionTitle() {
  return (
    <Text numberOfLines={1} style={styles.title}>
      <Text style={styles.freeTitle}>FREE </Text>
      Premium Available
    </Text>
  );
}

export function SubscriptionBanner() {
  const isSubscriber = useSelector(
    (state: RootState) => state.user.isSubscriber,
  );

  if (isSubscriber) {
    return null;
  }

  return (
    <Pressable
      accessibilityHint="Opens the premium subscription screen"
      accessibilityRole="button"
      onPress={() =>
        router.push({ pathname: "/paywall", params: { source: "tabs" } })
      }
      style={styles.banner}
    >
      <View style={styles.iconContainer}>
        <SubscriptionLetterIcon />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1</Text>
        </View>
      </View>

      <View style={styles.content}>
        <MaskedView
          accessibilityLabel="FREE Premium Available"
          accessibilityRole="text"
          maskElement={
            <View style={styles.titleMaskContent}>
              <SubscriptionTitle />
            </View>
          }
          style={styles.titleMask}
        >
          <LinearGradient
            colors={[
              Colors.light.subscriptionGradientStart,
              Colors.light.subscriptionGradientEnd,
            ]}
            end={{ x: 1, y: 0.5 }}
            start={{ x: 0, y: 0.5 }}
            style={styles.gradientFill}
          />
        </MaskedView>
        <MaskedView
          accessibilityLabel="Tap to upgrade your account!"
          accessibilityRole="text"
          maskElement={
            <View style={styles.subtitleMaskContent}>
              <Text numberOfLines={1} style={styles.subtitle}>
                Tap to upgrade your account!
              </Text>
            </View>
          }
          style={styles.subtitleMask}
        >
          <LinearGradient
            colors={[
              Colors.light.subscriptionDescriptionGradientStart,
              Colors.light.subscriptionDescriptionGradientEnd,
            ]}
            end={{ x: 1, y: 0.5 }}
            start={{ x: 0, y: 0.5 }}
            style={styles.gradientFill}
          />
        </MaskedView>
      </View>

      <SubscriptionChevronIcon />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    alignItems: "center",
    backgroundColor: Colors.light.subscriptionBackground,
    borderRadius: Radius.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Spacing.lg,
    marginTop: 24,
    paddingBottom: 13,
    paddingLeft: 20,
    paddingRight: 13,
    paddingTop: 13,
  },
  iconContainer: {
    justifyContent: "center",
  },
  badge: {
    alignItems: "center",
    backgroundColor: Colors.light.subscriptionBadge,
    borderRadius: Radius.full,
    height: 15,
    width: 15,
    justifyContent: "center",
    position: "absolute",
    right: -7.5,
    top: -7.5,
  },
  badgeText: {
    ...Typography.footnote,
    color: Colors.light.onPrimary,
    fontFamily: Typography.emphasis.fontFamily,
    lineHeight: 11,
  },
  content: {
    flex: 1,
    gap: 1,
    marginLeft: 20,
  },
  titleMask: {
    height: Typography.bodyMedium.lineHeight,
    width: "100%",
  },
  titleMaskContent: {
    flex: 1,
    justifyContent: "center",
  },
  gradientFill: {
    flex: 1,
  },
  subtitleMask: {
    height: Typography.bodySmall.lineHeight,
    width: "100%",
  },
  subtitleMaskContent: {
    flex: 1,
    justifyContent: "center",
  },
  freeTitle: {
    fontFamily: Typography.emphasis.fontFamily,
  },
  title: {
    ...Typography.bodyMedium,
    color: Colors.light.text,
  },
  subtitle: {
    ...Typography.bodySmall,
    color: Colors.light.text,
  },
});
