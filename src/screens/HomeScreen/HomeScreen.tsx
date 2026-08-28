import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";

import { Colors, Spacing } from "@/constants/theme";
import { CategoriesSection } from "@/screens/HomeScreen/components/CategoriesSection";
import { HomeHeader } from "@/screens/HomeScreen/components/HomeHeader";
import { QuestionsSection } from "@/screens/HomeScreen/components/QuestionsSection";
import { SubscriptionBanner } from "@/screens/HomeScreen/components/SubscriptionBanner";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <SubscriptionBanner />
        <View style={styles.divider} />
        <View style={styles.content}>
          <QuestionsSection />
          <CategoriesSection />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light.canvas,
    flex: 1,
  },
  divider: {
    borderBottomColor: Colors.light.surfaceBorder,
    borderBottomWidth: 0.5,
  },
  scrollContent: {
    paddingBottom: Spacing.lg,
  },
  content: {
    marginTop: Spacing.lg,
  },
});
