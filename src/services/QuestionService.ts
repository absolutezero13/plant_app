import ApiService from "@/services/ApiService";

const QUESTIONS_PATH = "/getQuestions";

export type Question = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

export type QuestionsResponse = Question[];

export class QuestionService {
  getQuestions(): Promise<QuestionsResponse> {
    return ApiService.get<QuestionsResponse>(QUESTIONS_PATH);
  }
}

export default new QuestionService();
