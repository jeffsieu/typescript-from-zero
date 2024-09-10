// EXERCISE 2.1: Function overloading
// Create overloads for a function that
// concatenates one string with one number.
// Ensure that the correct type of arguments are passed and the expected return type is enforced.

// Example usage:
// joinStringAndNumber("Hello", 123); // "Hello123"
// joinStringAndNumber(123, "Hello"); // "123Hello"
// joinStringAndNumber("Hello", "World"); // Error
// joinStringAndNumber(123, 456); // Error

function joinStringAndNumber(input1: string, input2: number): string;
function joinStringAndNumber(input1: number, input2: string): string;

function joinStringAndNumber(input1: string | number, input2: string | number) {
  return `${input1}${input2}`;
}

/// ADDITIONAL CONTENT FROM LESSON BELOW
type Vector2D = {
  x: number;
  y: number;
};

function multiply(vector: Vector2D, scaleFactor: number): Vector2D;
function multiply(scaleFactor: number, vector: Vector2D): Vector2D;

function multiply(arg1: Vector2D | number, arg2: Vector2D | number) {
  if (typeof arg1 === "number" && typeof arg2 !== "number") {
    const scaleFactor = arg1;
    const vector = arg2;
    return {
      x: scaleFactor * vector.x,
      y: scaleFactor * vector.y,
    };
  }
  if (typeof arg2 === "number" && typeof arg1 !== "number") {
    const scaleFactor = arg2;
    const vector = arg1;
    return {
      x: scaleFactor * vector.x,
      y: scaleFactor * vector.y,
    };
  }
}

const scaledVector = multiply({ x: 1, y: 2 }, 2);
console.log(scaledVector);

export {};
