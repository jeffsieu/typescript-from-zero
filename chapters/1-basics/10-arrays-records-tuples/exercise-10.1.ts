// Exercise: Arrays, Records and Tuples

// 1. Create a type annotation for an array of numbers
// 2. Create a type annotation for a tuple of [string, number, boolean]
// 3. Create a type annotation for a record with string keys and number values
// 4. Use the types you've created to annotate the following variables

const scores = [75, 82, 90, 88, 95];

const userInfo = ["Alice", 28, true];

const studentGrades = {
  Alice: 95,
  Bob: 87,
  Charlie: 92,
};

// 5. Create a function that takes an array of numbers and returns their sum
function sumScores(scores) {
  return scores.reduce((sum, score) => sum + score, 0);
}

// 6. Create a function that takes a tuple of [string, number] and returns a greeting
function greetWithAge(info) {
  const [name, age] = info;
  return `Hello, ${name}! You are ${age} years old.`;
}

// ignore the line below
export {};
