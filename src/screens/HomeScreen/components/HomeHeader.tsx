import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors, Radius, Spacing, Typography } from "@/constants/theme";
import { homeHeaderBackground, SearchIcon } from "@/screens/HomeScreen/assets";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good Morning! ☀️";
  }

  if (hour < 18) {
    return "Good Afternoon! ⛅";
  }

  return "Good Evening! 🌙";
}

export function HomeHeader() {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const greeting = getGreeting();

  return (
    <View style={[styles.header, { paddingTop: top + 3, width }]}>
      <Image
        contentFit="fill"
        source={homeHeaderBackground}
        style={[
          styles.background,
          {
            top: 0,
            width,
          },
        ]}
      />

      <View style={[styles.greeting]}>
        <Text style={styles.eyebrow}>Hi, plant lover!</Text>
        <Text accessibilityRole="header" style={styles.title}>
          {greeting}
        </Text>
      </View>

      <View accessibilityRole="search" style={styles.searchField}>
        <SearchIcon />
        <TextInput
          accessibilityLabel="Search for plants"
          autoCapitalize="none"
          autoCorrect={false}
          cursorColor={Colors.light.primary}
          placeholder="Search for plants"
          placeholderTextColor={Colors.light.searchPlaceholder}
          returnKeyType="search"
          selectionColor={Colors.light.primary}
          style={styles.searchInput}
          underlineColorAndroid={Colors.light.backgroundTransparent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.light.background,
    paddingHorizontal: Spacing.lg,
    aspectRatio: 375 / 175,
  },
  background: {
    left: 0,
    top: 0,
    position: "absolute",
    zIndex: 0,
    aspectRatio: 375 / 175,
  },
  greeting: {
    gap: 6,
    position: "relative",
    zIndex: 1,
  },
  eyebrow: {
    ...Typography.bodyLarge,
    color: Colors.light.text,
  },
  title: {
    ...Typography.headingStrong,
    color: Colors.light.text,
  },
  searchField: {
    alignItems: "center",
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.searchBorder,
    borderCurve: "continuous",
    borderRadius: Radius.medium,
    borderWidth: 0.2,
    flexDirection: "row",
    gap: 12,
    marginTop: 14,
    paddingHorizontal: 16,
    position: "relative",
    zIndex: 1,
    height: 44,
  },
  searchInput: {
    flex: 1,
    color: Colors.light.text,
    fontFamily: Typography.heading.fontFamily,
    fontSize: 15.5,
    height: "100%",
    letterSpacing: 0.07,
  },
});
