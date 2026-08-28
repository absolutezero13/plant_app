import { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";

import { Spacing } from "@/constants/theme";
import { CategoryCard } from "@/screens/HomeScreen/components/CategoryCard";
import { CategoryCardSkeleton } from "@/screens/HomeScreen/components/CategoryCardSkeleton";
import { SectionState } from "@/screens/HomeScreen/components/SectionState";
import CategoryService, { type Category } from "@/services/CategoryService";

const COLUMN_GAP = 11;
const ROW_GAP = 10;

type CategoryListItem =
  | { key: string; type: "skeleton" }
  | { category: Category; key: string; type: "category" };

const CATEGORY_SKELETONS: CategoryListItem[] = [
  { key: "categorySkeleton1", type: "skeleton" },
  { key: "categorySkeleton2", type: "skeleton" },
  { key: "categorySkeleton3", type: "skeleton" },
  { key: "categorySkeleton4", type: "skeleton" },
];

export function CategoriesSection() {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCategories = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await CategoryService.getCategories();
      setCategories([...response.data].sort((a, b) => a.rank - b.rank));
    } catch (requestError) {
      setCategories([]);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to load plant categories.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const cardWidth = (width - Spacing.lg * 2 - COLUMN_GAP) / 2;
  const items: CategoryListItem[] = isLoading
    ? CATEGORY_SKELETONS
    : categories.map((category) => ({
        category,
        key: category.id.toString(),
        type: "category",
      }));

  return (
    <View style={styles.section}>
      <FlatList
        accessibilityState={{ busy: isLoading }}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        data={items}
        ItemSeparatorComponent={() => <View style={styles.rowGap} />}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={
          <SectionState
            emptyMessage="No plant categories are available."
            error={error}
            onRetry={loadCategories}
            style={styles.state}
          />
        }
        numColumns={2}
        renderItem={({ item }) =>
          item.type === "skeleton" ? (
            <CategoryCardSkeleton width={cardWidth} />
          ) : (
            <CategoryCard category={item.category} width={cardWidth} />
          )
        }
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: Spacing.lg,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
  },
  row: {
    gap: COLUMN_GAP,
  },
  rowGap: {
    height: ROW_GAP,
  },
  state: {
    minHeight: 64,
  },
});
