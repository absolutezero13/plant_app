import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/PrimaryButton";
import {
  Colors,
  IS_SMALL_SCREEN,
  SCREEN_WIDTH,
  Spacing,
  Typography,
} from "@/constants/theme";
import {
  welcomeBackground,
  welcomePlant,
} from "@/screens/WelcomeScreen/assets";

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <Image
        contentFit="cover"
        source={welcomeBackground}
        style={styles.background}
      />

      <View
        style={[
          styles.content,
          {
            paddingTop: insets.top + Spacing.md,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <View style={styles.header}>
          <Text style={[Typography.hero, styles.title]}>
            Welcome to <Text style={Typography.emphasis}>PlantApp</Text>
          </Text>
          <Text style={[Typography.bodyLarge, styles.subtitle]}>
            Identify more than 3000+ plants and{`\n`}88% accuracy.
          </Text>
        </View>
        <Image
          accessibilityLabel="A monstera plant with watering, sunlight, and water care indicators"
          contentFit="contain"
          source={welcomePlant}
          style={styles.illustration}
        />

        <View style={styles.footer}>
          <PrimaryButton
            title="Get Started"
            onPress={() => router.push("/onboarding")}
          />
          <Text style={[Typography.finePrint, styles.legal]}>
            By tapping next, you are agreeing to PlantID{`\n`}
            <Text style={styles.legalLink}>Terms of Use</Text> &amp;{" "}
            <Text style={styles.legalLink}>Privacy Policy.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  background: {
    ...StyleSheet.absoluteFill,
  },
  content: {
    flex: 1,
  },
  header: {
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  title: {
    color: Colors.light.text,
    letterSpacing: 0.07,
  },
  subtitle: {
    color: Colors.light.textSecondary,
    letterSpacing: 0.07,
  },
  illustration: {
    width: IS_SMALL_SCREEN ? SCREEN_WIDTH * 0.9 : SCREEN_WIDTH,
    aspectRatio: 375 / 499,
    marginTop: Spacing.lg,
    alignSelf: "center",
    flex: 1,
  },
  footer: {
    gap: 17,
    marginBottom: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  legal: {
    color: Colors.light.legalText,
  },
  legalLink: {
    textDecorationLine: "underline",
  },
});
