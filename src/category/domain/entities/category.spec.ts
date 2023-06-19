import { Category } from "./category";
import { omit } from "lodash";
import { validate as uuidValidate } from "uuid";

describe("Category Tests", () => {
  test("constructor of category", () => {
    let category = new Category({
      name: "Movie",
    });
    let props = omit(category.props, "createdAt");
    expect(props).toMatchObject({
      name: "Movie",
      description: null,
      isActive: true,
    });
    expect(category.props.createdAt).toBeInstanceOf(Date);

    let createdAt = new Date();
    category = new Category({
      name: "Movie",
      description: "Movie description",
      isActive: false,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Movie description",
      isActive: false,
      createdAt,
    });
  });

  test("constructor of category with id", () => {
    let category = new Category({ name: "Movie" });
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy();

    category = new Category({ name: "Movie" }, null);
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy();

    category = new Category({ name: "Movie" }, undefined);
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy();

    category = new Category(
      { name: "Movie" },
      "a8115729-a4cb-4fb7-8e41-e29de7d06c24"
    );
    expect(category.id).toBe("a8115729-a4cb-4fb7-8e41-e29de7d06c24");
    expect(category.id).not.toBeNull();
    expect(uuidValidate(category.id)).toBeTruthy();
  });

  test("getter of name prop", () => {
    const category = new Category({
      name: "Movie",
      description: "Movie description",
    });
    expect(category.name).toBe("Movie");
  });

  test("getter and setter of description prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.description).toBeNull();

    category = new Category({
      name: "Movie",
      description: "Movie description",
    });
    expect(category.description).toBe("Movie description");

    category["description"] = "Other description";
    expect(category.description).toBe("Other description");

    category["description"] = undefined;
    expect(category.description).toBeNull();
  });

  test("getter of isActive prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.isActive).toBeTruthy();

    category = new Category({
      name: "Movie",
      isActive: true,
    });
    expect(category.isActive).toBeTruthy();

    category = new Category({
      name: "Movie",
      isActive: false,
    });
    expect(category.isActive).toBeFalsy();
  });

  test("getter of createdAt prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.createdAt).toBeInstanceOf(Date);

    let createdAt = new Date();
    category = new Category({
      name: "Movie",
      createdAt,
    });
    expect(category.createdAt).toBe(createdAt);
  });
});
