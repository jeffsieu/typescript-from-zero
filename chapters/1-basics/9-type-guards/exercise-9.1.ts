// Exercise 8.1: Create type guards

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const values: unknown[] = ["Hello", 42, "world", 100];
const strings = values.filter(isString);

// ignore the line below
export {};
