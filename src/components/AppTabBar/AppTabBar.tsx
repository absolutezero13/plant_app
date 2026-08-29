import type { BottomTabBarProps } from "expo-router/tabs";
import { StyleSheet, View } from "react-native";

import {
  AppTabItem,
  type AppTabItemConfig,
} from "@/components/AppTabBar/AppTabItem";
import {
  DiagnoseTabIcon,
  HomeTabIcon,
  MyGardenTabIcon,
  ProfileTabIcon,
  ScanTabIcon,
} from "@/components/AppTabBar/icons";
import { Colors, ControlSize } from "@/constants/theme";

const tabItems = [
  { name: "home", label: "Home", icon: HomeTabIcon },
  { name: "diagnose", label: "Diagnose", icon: DiagnoseTabIcon },
  { name: "scan", label: "Scan", icon: ScanTabIcon, raised: true },
  { name: "my-garden", label: "My Garden", icon: MyGardenTabIcon },
  { name: "profile", label: "Profile", icon: ProfileTabIcon },
] as const satisfies ReadonlyArray<AppTabItemConfig>;

export default function AppTabBar({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) {
  const openTab = (routeIndex: number) => {
    const route = state.routes[routeIndex];
    const isFocused = state.index === routeIndex;
    const event = navigation.emit({
      canPreventDefault: true,
      target: route.key,
      type: "tabPress",
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  const handleLongPress = (routeIndex: number) => {
    navigation.emit({
      target: state.routes[routeIndex].key,
      type: "tabLongPress",
    });
  };

  return (
    <View
      style={[
        styles.tabBar,
        {
          height: ControlSize.tabBarHeight + insets.bottom,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      {tabItems.map((item) => {
        const routeIndex = state.routes.findIndex(
          (route) => route.name === item.name,
        );

        if (routeIndex === -1) {
          return null;
        }

        const route = state.routes[routeIndex];
        const options = descriptors[route.key].options;

        return (
          <AppTabItem
            accessibilityLabel={options.tabBarAccessibilityLabel ?? item.label}
            isFocused={state.index === routeIndex}
            item={item}
            key={item.name}
            onLongPress={() => handleLongPress(routeIndex)}
            onPress={() => openTab(routeIndex)}
            testID={options.tabBarButtonTestID}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.light.background,
    flexDirection: "row",
    borderTopColor: Colors.light.surfaceBorder,
    borderTopWidth: 0.5,
  },
});
