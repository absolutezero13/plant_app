import type { ComponentType } from "react";
import type { BottomTabBarProps } from "expo-router/tabs";
import { Pressable, StyleSheet, Text, View } from "react-native";

import {
  DiagnoseTabIcon,
  HomeTabIcon,
  MyGardenTabIcon,
  ProfileTabIcon,
  ScanTabIcon,
  type TabIconProps,
} from "@/components/AppTabBar/icons";
import {
  Colors,
  ControlSize,
  Radius,
  Typography,
} from "@/constants/theme";

type TabItem = {
  icon: ComponentType<TabIconProps>;
  label: string;
  name: string;
  raised?: boolean;
};

const tabItems = [
  { name: "home", label: "Home", icon: HomeTabIcon },
  { name: "diagnose", label: "Diagnose", icon: DiagnoseTabIcon },
  { name: "scan", label: "Scan", icon: ScanTabIcon, raised: true },
  { name: "my-garden", label: "My Garden", icon: MyGardenTabIcon },
  { name: "profile", label: "Profile", icon: ProfileTabIcon },
] as const satisfies ReadonlyArray<TabItem>;

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
        const isFocused = state.index === routeIndex;
        const Icon = item.icon;

        if (item.raised) {
          return (
            <View key={item.name} style={styles.tabSlot}>
              <Pressable
                accessibilityLabel={options.tabBarAccessibilityLabel ?? item.label}
                accessibilityRole="tab"
                accessibilityState={{ selected: isFocused }}
                onLongPress={() => handleLongPress(routeIndex)}
                onPress={() => openTab(routeIndex)}
                style={styles.raisedButton}
                testID={options.tabBarButtonTestID}
              >
                <Icon
                  color={Colors.light.onPrimary}
                  size={ControlSize.tabBarIcon}
                />
              </Pressable>
            </View>
          );
        }

        const color = isFocused
          ? Colors.light.primary
          : Colors.light.tabBarInactive;

        return (
          <Pressable
            accessibilityLabel={options.tabBarAccessibilityLabel ?? item.label}
            accessibilityRole="tab"
            accessibilityState={{ selected: isFocused }}
            key={item.name}
            onLongPress={() => handleLongPress(routeIndex)}
            onPress={() => openTab(routeIndex)}
            style={styles.tabButton}
            testID={options.tabBarButtonTestID}
          >
            <Icon color={color} size={ControlSize.tabBarIcon} />
            <Text numberOfLines={1} style={[styles.label, { color }]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    alignItems: "flex-start",
    backgroundColor: Colors.light.background,
    borderTopColor: Colors.light.tabBarBorder,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
  },
  tabButton: {
    alignItems: "center",
    flex: 1,
    gap: 2,
    height: ControlSize.tabBarHeight,
    justifyContent: "center",
  },
  label: {
    ...Typography.tabLabel,
    textAlign: "center",
  },
  tabSlot: {
    alignItems: "center",
    flex: 1,
    height: ControlSize.tabBarHeight,
  },
  raisedButton: {
    alignItems: "center",
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.tabBarRaisedBorder,
    borderRadius: Radius.full,
    borderWidth: 4,
    height: ControlSize.tabBarRaisedButton,
    justifyContent: "center",
    marginTop: -22,
    width: ControlSize.tabBarRaisedButton,
  },
});
