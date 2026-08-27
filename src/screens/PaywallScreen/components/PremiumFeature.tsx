import { Image, type ImageProps } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Radius, Spacing, Typography } from "@/constants/theme";

type PremiumFeatureProps = {
  icon: ImageProps["source"];
  title: string;
  caption: string;
};

export function PremiumFeature({
  icon,
  title,
  caption,
}: PremiumFeatureProps) {
  return (
    <LinearGradient
      colors={[
        Colors.light.premiumFeatureStart,
        Colors.light.premiumFeatureEnd,
      ]}
      end={{ x: 0.5, y: 1 }}
      start={{ x: 0.5, y: 0 }}
      style={styles.root}
    >
      <View style={styles.iconBackground}>
        <Image
          contentFit="contain"
          source={icon}
          style={styles.icon}
          tintColor={Colors.light.premiumText}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-start",
    borderCurve: "continuous",
    borderRadius: 14,
    height: 130,
    justifyContent: "flex-start",
    paddingHorizontal: Spacing.sm,
    paddingVertical: 16,
    width: 156,
  },
  iconBackground: {
    alignItems: "center",
    backgroundColor: Colors.light.premiumIconBackground,
    borderCurve: "continuous",
    borderRadius: Radius.small,
    height: 35,
    justifyContent: "center",
    width: 36,
  },
  icon: {
    height: 18,
    width: 18,
  },
  content: {
    alignItems: "flex-start",
    paddingTop: 16,
  },
  title: {
    ...Typography.titleSmall,
    color: Colors.light.premiumText,
  },
  caption: {
    ...Typography.captionLarge,
    color: Colors.light.premiumTextSecondary,
    marginTop: Spacing.xs,
  },
});
