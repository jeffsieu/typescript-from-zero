// EXERCISE 1.1: Index types
// Refactor the following code to use index types and ensure proper typing of keys and values.

const data = {
  userId: 123,
  userName: "Alice",
  isActive: true,
};

// Refactor to a type definition that can ensure proper typing.
function getValue(key) {
  return data[key];
}

// Implement a function to get a value from `data` and ensure that
// the key used is valid and the return type matches the expected type.

// Ignore the line below
export {};
