import { UniqueEntityId } from "../../../shared/domain/unique-entity-id.vo";
import { Category, CategoryProps } from "./category";
import { omit } from "lodash";

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
    type CategoryData = { props: CategoryProps; id?: UniqueEntityId };
    const data: CategoryData[] = [
      { props: { name: "Movie" } },
      { props: { name: "Movie" }, id: null },
      { props: { name: "Movie" }, id: undefined },
      { props: { name: "Movie" }, id: new UniqueEntityId() },
    ];

    data.forEach((i) => {
      const category = new Category(i.props, i.id);
      expect(category.id).not.toBeNull();
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    });
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
