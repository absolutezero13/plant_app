import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";

import { Colors } from "@/constants/theme";
import { OnboardingBottomActions } from "@/screens/OnboardingScreen/components/OnboardingBottomActions";
import { PlantCareGuideOnboardingTab } from "@/screens/OnboardingScreen/components/PlantCareGuideOnboardingTab";
import { PlantIdentificationOnboardingTab } from "@/screens/OnboardingScreen/components/PlantIdentificationOnboardingTab";

const progressStepCount = 3;

const onboardingTabs = [
  {
    name: "plant-identification",
    component: PlantIdentificationOnboardingTab,
  },
  {
    name: "plant-care-guide",
    component: PlantCareGuideOnboardingTab,
  },
] as const;

export default function OnboardingScreen() {
  const pagerRef = useRef<ScrollView>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const { width } = useWindowDimensions();

  const continueOnboarding = () => {
    if (pageIndex < onboardingTabs.length - 1) {
      const nextPage = pageIndex + 1;
      pagerRef.current?.scrollTo({ x: nextPage * width, animated: true });
      setPageIndex(nextPage);
      return;
    }

    router.push("/paywall");
  };

  const updatePage = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setPageIndex(Math.round(event.nativeEvent.contentOffset.x / width));
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />

      <ScrollView
        ref={pagerRef}
        bounces={false}
        decelerationRate="fast"
        horizontal
        onMomentumScrollEnd={updatePage}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        style={styles.pager}
      >
        {onboardingTabs.map(({ name, component: OnboardingTabComponent }) => (
          <OnboardingTabComponent key={name} />
        ))}
      </ScrollView>

      <OnboardingBottomActions
        activeIndex={pageIndex}
        onContinue={continueOnboarding}
        stepCount={progressStepCount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
  pager: {
    flex: 1,
  },
});
