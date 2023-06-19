export class InvalidUuidError extends Error {
  constructor(message?: string) {
    super(message || "IS must be a valid UUID");
    this.name = "InvalidUuidError";
  }
}
