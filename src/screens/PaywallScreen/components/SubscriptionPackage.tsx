import { Pressable, StyleSheet, Text, View } from "react-native";

import { AdaptiveGlass } from "@/components/AdaptiveGlass";
import { Colors, Fonts, Radius, Spacing, Typography } from "@/constants/theme";

type SubscriptionPackageProps = {
  badge?: string;
  detail: string;
  onPress: () => void;
  selected: boolean;
  title: string;
};

export function SubscriptionPackage({
  badge,
  detail,
  onPress,
  selected,
  title,
}: SubscriptionPackageProps) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      onPress={onPress}
      style={styles.root}
    >
      <AdaptiveGlass
        colorScheme="dark"
        fallbackColor={
          selected
            ? Colors.light.premiumSurfaceSelected
            : Colors.light.premiumPlanSurface
        }
        glassEffectStyle="clear"
        isInteractive
        style={styles.package}
        tintColor={
          selected
            ? Colors.light.premiumSurfaceSelected
            : Colors.light.premiumGlassTint
        }
      >
        <View style={[styles.radio, selected && styles.selectedRadio]}>
          {selected && <View style={styles.radioDot} />}
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.detail}>{detail}</Text>
        </View>

        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </AdaptiveGlass>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    borderCurve: "continuous",
    borderRadius: 14,
    minHeight: 70,
    width: "100%",
  },
  package: {
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: 14,
    flex: 1,
    flexDirection: "row",
    minHeight: 70,
    paddingHorizontal: 14.5,
  },
  outline: {
    ...StyleSheet.absoluteFillObject,
    borderColor: Colors.light.premiumOutline,
    borderCurve: "continuous",
    borderRadius: 14,
    borderWidth: 0.5,
  },
  selectedOutline: {
    borderColor: Colors.light.primary,
    borderWidth: 1.5,
  },
  radio: {
    alignItems: "center",
    borderColor: Colors.light.premiumRadioOutline,
    borderRadius: Radius.full,
    borderWidth: 1.5,
    height: 24,
    justifyContent: "center",
    marginRight: Spacing.md,
    width: 24,
  },
  selectedRadio: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },
  radioDot: {
    backgroundColor: Colors.light.premiumText,
    borderRadius: Radius.full,
    height: 8,
    width: 8,
  },
  content: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    ...Typography.bodyStrong,
    color: Colors.light.premiumText,
    lineHeight: 22,
  },
  detail: {
    ...Typography.bodySmall,
    color: Colors.light.premiumPlanDetail,
    marginTop: 1,
  },
  badge: {
    alignItems: "center",
    backgroundColor: Colors.light.primary,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 14,
    justifyContent: "center",
    minWidth: 77,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    position: "absolute",
    right: 0,
    top: 0,
  },
  badgeText: {
    ...Typography.bodySmall,
    color: Colors.light.onPrimary,
    fontFamily: Fonts.medium,
  },
});
