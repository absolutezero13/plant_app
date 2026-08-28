import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { Colors, Radius, Typography } from "@/constants/theme";
import type { Category } from "@/services/CategoryService";

type CategoryCardProps = {
  category: Category;
  width: number;
};

export function CategoryCard({ category, width }: CategoryCardProps) {
  return (
    <View style={[styles.card, { width }]}>
      <Text numberOfLines={2} style={styles.title}>
        {category.title}
      </Text>
      <Image
        accessibilityLabel={category.title}
        cachePolicy="memory-disk"
        contentFit="contain"
        source={{ uri: category.image.url }}
        style={[
          styles.image,
          {
            width: category.image.width,
            height: category.image.height,
          },
        ]}
        transition={150}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.surfaceBorder,
    borderRadius: Radius.medium,
    borderWidth: 1,
    height: 152,
    overflow: "hidden",
  },
  title: {
    ...Typography.bodyMedium,
    color: Colors.light.text,
    maxWidth: "70%",
    margin: 16,
  },
  image: {
    bottom: 0,
    position: "absolute",
    right: 0,
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});
