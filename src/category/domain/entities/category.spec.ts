import { Category } from "./category";

describe("Category Tests", () => {
  test("constructor of category", () => {
    const createdAt = new Date();
    const category = new Category({
      name: "Movie",
      description: "Movie description",
      isActive: true,
      createdAt,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "Movie description",
      isActive: true,
      createdAt,
    });
  });
});
