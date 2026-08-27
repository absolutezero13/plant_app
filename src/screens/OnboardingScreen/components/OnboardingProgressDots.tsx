import { StyleSheet, View } from "react-native";

import { Colors, Radius, Spacing } from "@/constants/theme";

type OnboardingProgressDotsProps = {
  activeIndex: number;
  count: number;
};

export function OnboardingProgressDots({
  activeIndex,
  count,
}: OnboardingProgressDotsProps) {
  return (
    <View
      accessibilityLabel={`Step ${activeIndex + 1} of ${count}`}
      accessibilityRole="progressbar"
      style={styles.row}
    >
      {Array.from({ length: count }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === activeIndex
              ? styles.activeDot
              : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: Spacing.sm,
    justifyContent: "center",
  },
  dot: {
    borderRadius: Radius.full,
  },
  activeDot: {
    backgroundColor: Colors.light.indicator,
    height: 10,
    width: 10,
  },
  inactiveDot: {
    backgroundColor: Colors.light.indicatorMuted,
    height: 6,
    width: 6,
  },
});
