import { StyleSheet, View } from "react-native";

import { Colors, Radius } from "@/constants/theme";
import { SkeletonPulse } from "@/screens/HomeScreen/components/SkeletonPulse";

type CategoryCardSkeletonProps = {
  width: number;
};

export function CategoryCardSkeleton({ width }: CategoryCardSkeletonProps) {
  return (
    <SkeletonPulse style={[styles.card, { width }]}>
      <View style={styles.title}>
        <View style={styles.longLine} />
        <View style={styles.shortLine} />
      </View>
      <View style={styles.image} />
    </SkeletonPulse>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.surfaceBorder,
    borderCurve: "continuous",
    borderRadius: Radius.medium,
    borderWidth: 1,
    height: 152,
  },
  title: {
    gap: 8,
    left: 16,
    position: "absolute",
    right: 12,
    top: 18,
    zIndex: 1,
  },
  longLine: {
    backgroundColor: Colors.light.skeletonBase,
    borderRadius: Radius.full,
    height: 12,
    width: "68%",
  },
  shortLine: {
    backgroundColor: Colors.light.skeletonBase,
    borderRadius: Radius.full,
    height: 12,
    width: "46%",
  },
  image: {
    backgroundColor: Colors.light.skeletonHighlight,
    borderTopLeftRadius: Radius.large,
    bottom: 0,
    height: "66%",
    position: "absolute",
    right: 0,
    width: "64%",
  },
});
