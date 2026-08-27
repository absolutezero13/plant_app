import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { PrimaryButton } from "@/components/PrimaryButton";
import { Colors, Spacing } from "@/constants/theme";
import { OnboardingProgressDots } from "@/screens/OnboardingScreen/components/OnboardingProgressDots";

type OnboardingBottomActionsProps = {
  activeIndex: number;
  stepCount: number;
  onContinue: () => void;
};

export function OnboardingBottomActions({
  activeIndex,
  stepCount,
  onContinue,
}: OnboardingBottomActionsProps) {
  const { bottom: bottomInset } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        { bottom: bottomInset + 12.5 },
      ]}
    >
      <LinearGradient
        colors={[Colors.light.backgroundTransparent, Colors.light.background]}
        locations={[0, 0.6]}
        pointerEvents="none"
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      />

      <View style={styles.content}>
        <PrimaryButton title="Continue" onPress={onContinue} />
        <OnboardingProgressDots activeIndex={activeIndex} count={stepCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    left: 0,
    position: "absolute",
    right: 0,
    zIndex: 1,
  },
  gradient: {
    bottom: -10,
    height: 160,
    left: 0,
    position: "absolute",
    right: 0,
  },
  content: {
    gap: 32.5,
    paddingHorizontal: Spacing.lg,
    zIndex: 1,
  },
});
