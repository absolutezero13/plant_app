import { decodeCategories } from "@/services/CategoryService";
import { decodeQuestions } from "@/services/QuestionService";

describe("API response parsing", () => {
  it("maps categories with images, nullable images, and missing images", () => {
    const response = decodeCategories({
      data: [
        {
          id: 1,
          image: { height: 120, url: "https://example.com/fern.png", width: 80 },
          rank: 2,
          title: "Ferns",
        },
        { id: 2, image: null, rank: 1, title: "Palms" },
        { id: 3, rank: 3, title: "Succulents" },
      ],
    });

    expect(response.data).toHaveLength(3);
    expect(response.data[1].image).toBeNull();
    expect(response.data[2].image).toBeNull();
  });

  it("rejects malformed category data", () => {
    expect(() =>
      decodeCategories({
        data: [{ id: 1, image: null, rank: "first", title: "Ferns" }],
      }),
    ).toThrow(
      "Invalid API response at categories.data[0].rank: expected a number.",
    );
  });

  it("accepts valid questions and rejects malformed questions", () => {
    const question = {
      id: 1,
      image_uri: "https://example.com/guide.png",
      order: 1,
      subtitle: "Plant guide",
      title: "How to identify plants",
      uri: "https://example.com/guide",
    };

    expect(decodeQuestions([question])).toEqual([
      {
        id: question.id,
        imageUrl: question.image_uri,
        order: question.order,
        subtitle: question.subtitle,
        title: question.title,
        uri: question.uri,
      },
    ]);
    expect(() => decodeQuestions([{ ...question, order: "first" }])).toThrow(
      "Invalid API response at questions[0].order: expected a number.",
    );
  });
});
