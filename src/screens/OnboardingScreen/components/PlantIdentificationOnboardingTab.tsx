import { Image } from "expo-image";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, Spacing, Typography } from "@/constants/theme";
import {
  plantIdentificationBackground,
  plantIdentificationCamera,
  titleEmphasisUnderline,
} from "@/screens/OnboardingScreen/assets";

export function PlantIdentificationOnboardingTab() {
  const { height, width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.root]}>
      <Image
        contentFit="cover"
        source={plantIdentificationBackground}
        style={styles.background}
      />

      <View
        accessibilityLabel="Take a photo to identify the plant!"
        accessibilityRole="header"
        style={[styles.heading, { paddingTop: top + Spacing.md }]}
      >
        <View style={styles.headingRow}>
          <Text style={[Typography.headingLarge, styles.headingText]}>
            Take a photo to{" "}
          </Text>
          <View style={styles.highlight}>
            <Text style={[Typography.headingLargeStrong, styles.headingText]}>
              identify
            </Text>
            <Image
              contentFit="fill"
              source={titleEmphasisUnderline}
              style={styles.underline}
            />
          </View>
        </View>

        <View style={styles.secondLine}>
          <Text style={[Typography.headingLarge, styles.headingText]}>
            the plant!
          </Text>
        </View>
      </View>

      <View style={styles.imageArea}>
        <Image
          accessibilityLabel="A plant centered inside a camera identification frame"
          contentFit="contain"
          source={plantIdentificationCamera}
          style={{ height, width }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflow: "hidden",
  },
  background: {
    ...StyleSheet.absoluteFill,
  },
  heading: {
    paddingHorizontal: Spacing.lg,
  },
  headingRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 40,
  },
  headingText: {
    color: Colors.light.text,
    letterSpacing: -1,
  },
  highlight: {
    height: 40,
    position: "relative",
  },
  underline: {
    bottom: -11,
    height: 13,
    left: -14,
    position: "absolute",
    width: 136,
  },
  secondLine: {
    height: 40,
  },
  imageArea: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
