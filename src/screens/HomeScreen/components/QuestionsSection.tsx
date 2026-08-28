import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { Colors, Spacing, Typography } from "@/constants/theme";
import { QuestionCard } from "@/screens/HomeScreen/components/QuestionCard";
import { QuestionCardSkeleton } from "@/screens/HomeScreen/components/QuestionCardSkeleton";
import { SectionState } from "@/screens/HomeScreen/components/SectionState";
import QuestionService, { type Question } from "@/services/QuestionService";

type QuestionListItem =
  | { key: string; type: "skeleton" }
  | { key: string; question: Question; type: "question" };

const QUESTION_SKELETONS: QuestionListItem[] = [
  { key: "questionSkeleton1", type: "skeleton" },
  { key: "questionSkeleton2", type: "skeleton" },
];

export function QuestionsSection() {
  const { width } = useWindowDimensions();
  const [questionData, setQuestionData] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadQuestions = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await QuestionService.getQuestions();
      setQuestionData([...response].sort((a, b) => a.order - b.order));
    } catch (requestError) {
      setQuestionData([]);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to load plant guides.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const questions: QuestionListItem[] = isLoading
    ? QUESTION_SKELETONS
    : questionData.map((question) => ({
        key: question.id.toString(),
        question,
        type: "question",
      }));

  return (
    <View>
      <Text style={styles.heading}>Get Started</Text>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={questions}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={
          <SectionState
            emptyMessage="No plant guides are available."
            error={error}
            onRetry={loadQuestions}
            style={{ width: width - Spacing.lg * 2 }}
          />
        }
        renderItem={({ item }) =>
          item.type === "skeleton" ? (
            <QuestionCardSkeleton />
          ) : (
            <QuestionCard question={item.question} />
          )
        }
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    ...Typography.headline,
    color: Colors.light.text,
    marginBottom: 14,
    paddingHorizontal: Spacing.lg,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
  },
  separator: {
    width: 10,
  },
});
