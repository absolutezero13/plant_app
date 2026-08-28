import { useEffect, type PropsWithChildren } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

type SkeletonPulseProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function SkeletonPulse({ children, style }: SkeletonPulseProps) {
  const opacity = useSharedValue(0.55);

  useEffect(() => {
    opacity.set(
      withRepeat(
        withTiming(1, {
          duration: 650,
          easing: Easing.inOut(Easing.quad),
          reduceMotion: ReduceMotion.System,
        }),
        -1,
        true,
        undefined,
        ReduceMotion.System,
      ),
    );

    return () => cancelAnimation(opacity);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.get(),
  }));

  return (
    <Animated.View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[style, animatedStyle]}
    >
      {children}
    </Animated.View>
  );
}
