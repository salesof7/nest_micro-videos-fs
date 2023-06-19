import { InvalidUuidError } from "../errors/invalid-uuid.error";
import { v4 as uuid, validate } from "uuid";

export class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuid();
    this.validate();
  }

  private validate(): void {
    const isValid = validate(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}
