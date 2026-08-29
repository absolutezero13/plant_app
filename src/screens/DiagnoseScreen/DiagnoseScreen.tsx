import { StyleSheet, Text, View } from "react-native";

import { Colors, Typography } from "@/constants/theme";

export default function DiagnoseScreen() {
  return (
    <View style={styles.screen}>
      <Text accessibilityRole="header" style={styles.title}>
        Diagnose
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...Typography.title,
    color: Colors.light.text,
  },
});
