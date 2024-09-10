// Exercise 8.1: "as" vs type annotations vs "satisfies"

function getUserInput(): unknown {
  return undefined;
}

// 1. Refactor the following code to use type annotations instead of "as"
const userInput = getUserInput() as string;
const userAge = parseInt(userInput) as number;

// 2. Refactor the following code to use "satisfies" with as const instead of type annotation
type Status = "pending" | "active" | "inactive";

const statusMap = {
//    ^?
  pending: "Waiting for approval",
  active: "User is active",
  inactive: "User has been deactivated",
} as const satisfies Record<Status, string>;

// Observe the difference in inferred type
// pendingStatus should be of type "Waiting for approval" instead of string
const pendingStatus = statusMap.pending;
//    ^?

// 3. Use "satisfies" to create a type-safe object with string keys and number values
const scores = {
  Alice: 95,
  Bob: 80,
  Charlie: 90,
} satisfies Record<string, number>;

// ignore the line below
export {};
