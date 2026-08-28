import ApiService from "@/services/ApiService";
import { z } from "zod";

const CATEGORIES_PATH = "/getCategories";

const categoryImagePayload = z.object({
  height: z.number(),
  url: z.string(),
  width: z.number(),
});

const categoryPayload = z.object({
  id: z.number(),
  image: categoryImagePayload.nullish().transform((image) => image ?? null),
  rank: z.number(),
  title: z.string(),
});

const categoryCollectionPayload = z.object({
  data: z.array(categoryPayload),
});

export type CategoryImage = z.infer<typeof categoryImagePayload>;
export type Category = z.infer<typeof categoryPayload>;
export type CategoriesResponse = z.infer<typeof categoryCollectionPayload>;

export const validateCategories = (payload: unknown): CategoriesResponse =>
  categoryCollectionPayload.parse(payload);

export class CategoryService {
  async getCategories(): Promise<CategoriesResponse> {
    const response = await ApiService.get<unknown>(CATEGORIES_PATH);
    return validateCategories(response);
  }
}

export default new CategoryService();
