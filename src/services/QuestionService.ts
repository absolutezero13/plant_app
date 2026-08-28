import ApiService from "@/services/ApiService";
import { z } from "zod";

const QUESTIONS_PATH = "/getQuestions";

const questionPayload = z
  .object({
    id: z.number(),
    image_uri: z.string(),
    order: z.number(),
    subtitle: z.string(),
    title: z.string(),
    uri: z.string(),
  })
  .transform(({ image_uri, ...question }) => ({
    ...question,
    imageUrl: image_uri,
  }));

const questionCollectionPayload = z.array(questionPayload);

export type Question = z.infer<typeof questionPayload>;
export type QuestionsResponse = z.infer<typeof questionCollectionPayload>;

export const validateQuestions = (payload: unknown): QuestionsResponse =>
  questionCollectionPayload.parse(payload);

export class QuestionService {
  async getQuestions(): Promise<QuestionsResponse> {
    const response = await ApiService.get<unknown>(QUESTIONS_PATH);
    return validateQuestions(response);
  }
}

export default new QuestionService();
