import { Image } from "expo-image";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, Spacing, Typography } from "@/constants/theme";
import {
  plantCareBackground,
  plantCareGuidePreview,
  titleEmphasisUnderline,
} from "@/screens/OnboardingScreen/assets";

export function PlantCareGuideOnboardingTab() {
  const { height, width } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.root]}>
      <Image
        contentFit="cover"
        source={plantCareBackground}
        style={styles.background}
      />

      <View
        accessibilityLabel="Get plant care guides"
        accessibilityRole="header"
        style={[styles.heading, { paddingTop: top + Spacing.md }]}
      >
        <View style={styles.headingRow}>
          <Text style={[Typography.headingLarge, styles.headingText]}>
            Get plant{" "}
          </Text>
          <View style={styles.highlight}>
            <Text style={[Typography.headingLargeStrong, styles.headingText]}>
              care guides
            </Text>
            <Image
              contentFit="fill"
              source={titleEmphasisUnderline}
              style={styles.underline}
            />
          </View>
        </View>
      </View>

      <View style={styles.imageArea}>
        <Image
          accessibilityLabel="An example PlantApp care guide shown on a phone"
          contentFit="contain"
          source={plantCareGuidePreview}
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
    alignItems: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headingText: {
    color: Colors.light.text,
  },
  highlight: {
    position: "relative",
  },
  underline: {
    bottom: -14,
    height: 13,
    left: 0,
    position: "absolute",
    width: 152,
  },
  imageArea: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
