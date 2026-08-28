import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Radius, Typography } from "@/constants/theme";
import type { Question } from "@/services/QuestionService";

type QuestionCardProps = {
  question: Question;
};

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <View style={styles.card}>
      <Image
        accessibilityLabel={question.title}
        cachePolicy="memory-disk"
        contentFit="cover"
        source={{ uri: question.image_uri }}
        style={styles.image}
        transition={150}
      />
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {question.title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.background,
    borderRadius: Radius.medium,
    height: 164,
    overflow: "hidden",
    width: 240,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    bottom: 13,
    justifyContent: "center",
    left: 14,
    minHeight: 40,
    position: "absolute",
    right: 14,
  },
  title: {
    ...Typography.headline,
    color: Colors.light.onPrimary,
  },
});
