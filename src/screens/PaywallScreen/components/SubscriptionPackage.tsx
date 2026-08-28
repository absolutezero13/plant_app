import { LinearGradient } from "expo-linear-gradient";
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
  const selectedBackground = selected ? (
    <LinearGradient
      colors={[
        Colors.light.premiumPackageGradientStart,
        Colors.light.premiumPackageGradientEnd,
      ]}
      end={{ x: 0, y: 0.5 }}
      locations={[0, 1]}
      pointerEvents="none"
      start={{ x: 1, y: 0.5 }}
      style={styles.selectedBackground}
    />
  ) : null;

  const renderPackageContent = () => (
    <>
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
    </>
  );

  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      onPress={onPress}
      style={styles.root}
    >
      {process.env.EXPO_OS === "android" ? (
        <View
          style={[styles.package, styles.androidPackage]}
        >
          {selectedBackground}
          {renderPackageContent()}
          <View
            pointerEvents="none"
            style={[styles.outline, selected && styles.selectedOutline]}
          />
        </View>
      ) : (
        <AdaptiveGlass
          colorScheme="dark"
          fallbackColor={Colors.light.premiumPlanSurface}
          glassEffectStyle="regular"
          isInteractive
          style={styles.package}
          tintColor={Colors.light.premiumGlassTint}
        >
          {selectedBackground}
          {renderPackageContent()}
          <View
            pointerEvents="none"
            style={[styles.outline, selected && styles.selectedOutline]}
          />
        </AdaptiveGlass>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    borderCurve: "continuous",
    borderRadius: 14,
    minHeight: 60,
    width: "100%",
  },
  package: {
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: 14,
    flexDirection: "row",
    minHeight: 60,
    paddingHorizontal: Spacing.md2,
  },
  androidPackage: {
    backgroundColor: Colors.light.premiumFeatureStart,
  },
  selectedBackground: {
    ...StyleSheet.absoluteFill,
    borderCurve: "continuous",
    borderRadius: 14,
  },
  outline: {
    ...StyleSheet.absoluteFill,
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
    backgroundColor: Colors.light.premiumRadioBackground,
    borderRadius: Radius.full,
    height: 24,
    justifyContent: "center",
    marginRight: Spacing.md,
    width: 24,
  },
  selectedRadio: {
    backgroundColor: Colors.light.primary,
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
