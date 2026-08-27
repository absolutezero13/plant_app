import { StyleSheet, View } from "react-native";

import { Colors } from "@/constants/theme";

export default function ProfileScreen() {
  return <View style={styles.screen} />;
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
});
