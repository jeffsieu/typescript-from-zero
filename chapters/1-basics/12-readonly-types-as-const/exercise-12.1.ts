// Exercise 12.1: Readonly types and "as const"

// 1. Create a readonly version of the following interface
type User = {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = ;// Your implementation here

// 2. Use the readonly version to annotate the following object
const alice = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// 3. Create a readonly array of numbers
const luckyNumbers = [7, 13, 42, 99];

// 4. Use "as const" to create a readonly tuple of string literals
const directions = ["North", "South", "East", "West"];

// 5. Create a function that takes a readonly array of numbers and tries to modify it
function doubleNumbers(numbers) {
  // Try to modify the array (this should cause a type error)
  // numbers[0] = numbers[0] * 2;
  return numbers.map(n => n * 2);
}

// 6. Modify the following object to make it a readonly object using "as const"
const config = {
  api: {
    url: "https://api.example.com",
    version: "v1",
  },
  timeout: 5000,
  retries: 3,
};

// 7. Try to modify a property of the config object (this should cause a type error)
// config.api.url = "https://new-api.example.com";

// ignore the line below
export {};