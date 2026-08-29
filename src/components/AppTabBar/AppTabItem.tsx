import type { ComponentType } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { TabIconProps } from "@/components/AppTabBar/icons";
import { Colors, ControlSize, Typography } from "@/constants/theme";

export type AppTabItemConfig = {
  icon: ComponentType<TabIconProps>;
  label: string;
  name: string;
  raised?: boolean;
};

type AppTabItemProps = {
  accessibilityLabel: string;
  isFocused: boolean;
  item: AppTabItemConfig;
  onLongPress: () => void;
  onPress: () => void;
  testID?: string;
};

export function AppTabItem({
  accessibilityLabel,
  isFocused,
  item,
  onLongPress,
  onPress,
  testID,
}: AppTabItemProps) {
  const Icon = item.icon;

  if (item.raised) {
    return (
      <View style={styles.tabSlot}>
        <Pressable
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="tab"
          accessibilityState={{ selected: isFocused }}
          onLongPress={onLongPress}
          onPress={onPress}
          style={styles.raisedButton}
          testID={testID}
        >
          <Icon
            color={Colors.light.onPrimary}
            size={ControlSize.tabBarRaisedButton}
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
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="tab"
      accessibilityState={{ selected: isFocused }}
      onLongPress={onLongPress}
      onPress={onPress}
      style={styles.tabButton}
      testID={testID}
    >
      <Icon color={color} size={ControlSize.tabBarIcon} />
      <Text numberOfLines={1} style={[styles.label, { color }]}>
        {item.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    alignItems: "center",
    flex: 1,
    gap: 4.87,
    justifyContent: "flex-end",
  },
  label: {
    ...Typography.tabLabel,
    textAlign: "center",
  },
  tabSlot: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  raisedButton: {
    marginBottom: 9,
  },
});
