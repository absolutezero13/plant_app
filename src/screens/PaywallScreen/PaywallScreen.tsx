import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AdaptiveGlassContainer } from "@/components/AdaptiveGlass";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Colors, Fonts, Radius, Spacing, Typography } from "@/constants/theme";
import { paywallHero } from "@/screens/PaywallScreen/assets";
import { PremiumFeature } from "@/screens/PaywallScreen/components/PremiumFeature";
import { SubscriptionPackage } from "@/screens/PaywallScreen/components/SubscriptionPackage";

const features = [
  {
    icon: "sf:viewfinder",
    title: "Unlimited",
    caption: "Plant Identify",
  },
  {
    icon: "sf:speedometer",
    title: "Faster",
    caption: "Process",
  },
  {
    icon: "sf:leaf.fill",
    title: "Detailed",
    caption: "Plant care",
  },
];

type PackageId = "monthly" | "annual";

export default function PaywallScreen() {
  const [selectedPackage, setSelectedPackage] = useState<PackageId>("annual");
  const { bottom, top } = useSafeAreaInsets();

  const finishOnboarding = () => router.replace("/home");

  return (
    <View style={styles.root}>
      <StatusBar style="light" />

      <Image
        accessibilityLabel="A leafy houseplant in a camera identification frame"
        contentFit="cover"
        source={paywallHero}
        style={styles.hero}
      />

      <Pressable
        accessibilityLabel="Close premium offer"
        accessibilityRole="button"
        hitSlop={8}
        onPress={finishOnboarding}
        style={[styles.closeButton, { top }]}
      >
        <View style={styles.closeCircle}>
          <Text style={styles.closeIcon}>×</Text>
        </View>
      </Pressable>

      <View
        style={[
          styles.content,
          {
            paddingBottom: bottom,
            paddingTop: top + Spacing.sm,
          },
        ]}
      >
        <View style={styles.heading}>
          <View style={styles.titleRow}>
            <Text accessibilityRole="header" style={styles.brandTitle}>
              PlantApp{" "}
            </Text>
            <Text style={styles.premiumTitle}>Premium</Text>
          </View>
          <Text style={styles.subtitle}>Access All Features</Text>
        </View>

        <View style={styles.featureSection}>
          <ScrollView
            contentContainerStyle={styles.featureList}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {features.map((feature) => (
              <PremiumFeature key={feature.title} {...feature} />
            ))}
          </ScrollView>
        </View>

        <AdaptiveGlassContainer
          accessibilityRole="radiogroup"
          spacing={16}
          style={styles.packages}
        >
          <SubscriptionPackage
            detail="$2.99/month, auto renewable"
            onPress={() => setSelectedPackage("monthly")}
            selected={selectedPackage === "monthly"}
            title="1 Month"
          />
          <SubscriptionPackage
            badge="Save 50%"
            detail="First 3 days free, then $529.99/year"
            onPress={() => setSelectedPackage("annual")}
            selected={selectedPackage === "annual"}
            title="1 Year"
          />
        </AdaptiveGlassContainer>

        <View style={styles.footer}>
          <PrimaryButton
            title="Try free for 3 days"
            onPress={finishOnboarding}
          />

          <Text style={styles.footnote}>
            After the 3-day free trial period you&apos;ll be charged $529.99 per
            year unless you cancel before the trial expires. Yearly Subscription
            is Auto-Renewable
          </Text>
          <Text style={styles.terms}>Terms · Privacy · Restore</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.light.premiumBackground,
    flex: 1,
  },
  hero: {
    aspectRatio: 375 / 490,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  },
  closeButton: {
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    position: "absolute",
    right: Spacing.sm,
    width: 40,
    zIndex: 2,
  },
  closeCircle: {
    alignItems: "center",
    backgroundColor: Colors.light.premiumCloseBackground,
    borderRadius: Radius.full,
    height: 24,
    justifyContent: "center",
    width: 24,
  },
  closeIcon: {
    color: Colors.light.premiumText,
    fontFamily: Fonts.regular,
    fontSize: 16,
    lineHeight: 18,
    transform: [{ translateY: -1 }],
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  heading: {
    paddingHorizontal: Spacing.lg,
    width: "100%",
  },
  titleRow: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  brandTitle: {
    ...Typography.headingLargeStrong,
    color: Colors.light.premiumText,
    lineHeight: 32,
  },
  premiumTitle: {
    ...Typography.hero,
    color: Colors.light.premiumText,
    lineHeight: 32,
  },
  subtitle: {
    ...Typography.bodyLarge,
    color: Colors.light.premiumTextSecondary,
    letterSpacing: 0.38,
    marginTop: Spacing.xs,
  },
  featureSection: {
    marginTop: Spacing.lg,
    width: "100%",
  },
  featureList: {
    flexDirection: "row",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  packages: {
    gap: 16,
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    width: "100%",
  },
  footer: {
    marginTop: 26,
    paddingHorizontal: Spacing.lg,
    width: "100%",
    zIndex: 1,
  },
  footnote: {
    ...Typography.finePrint,
    color: Colors.light.premiumTextTertiary,
    letterSpacing: 0,
    marginTop: Spacing.sm,
  },
  terms: {
    ...Typography.finePrint,
    color: Colors.light.premiumTerms,
    letterSpacing: 0,
    marginTop: 10,
  },
});
