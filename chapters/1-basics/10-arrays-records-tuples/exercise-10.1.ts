// Exercise 10.1: Arrays, Records and Tuples

// 1. Create a type annotation for an array of numbers
const scores = [75, 82, 90, 88, 95];

// 2. Create a type annotation for a tuple of [string, number, boolean]
const userInfo = ["Alice", 28, true];

// 3. Create a type annotation for a record with string keys and number values
const studentGrades = {
  Alice: 95,
  Bob: 87,
  Charlie: 92,
};

// 4. Create a function that takes an array of numbers and returns their sum
function sumScores(scores) {
  return scores.reduce((sum, score) => sum + score, 0);
}

// 5. Create a function that takes a tuple of [string, number] and returns a greeting
function greetWithAge(info) {
  const [name, age] = info;
  return `Hello, ${name}! You are ${age} years old.`;
}

// ignore the line below
export {};
