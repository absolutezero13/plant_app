import { StyleSheet, View } from "react-native";

import { Colors, Radius } from "@/constants/theme";
import { SkeletonPulse } from "@/screens/HomeScreen/components/SkeletonPulse";

export function QuestionCardSkeleton() {
  return (
    <SkeletonPulse style={styles.card}>
      <View style={styles.title}>
        <View style={styles.longLine} />
        <View style={styles.shortLine} />
      </View>
    </SkeletonPulse>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.skeletonBase,
    borderCurve: "continuous",
    borderRadius: Radius.medium,
    height: 164,
    width: 240,
  },
  title: {
    bottom: 18,
    gap: 7,
    left: 14,
    position: "absolute",
    right: 14,
  },
  longLine: {
    backgroundColor: Colors.light.skeletonHighlight,
    borderRadius: Radius.full,
    height: 11,
    width: "82%",
  },
  shortLine: {
    backgroundColor: Colors.light.skeletonHighlight,
    borderRadius: Radius.full,
    height: 11,
    width: "58%",
  },
});
