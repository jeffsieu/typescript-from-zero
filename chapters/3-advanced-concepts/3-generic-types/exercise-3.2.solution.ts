/* eslint-disable @typescript-eslint/no-explicit-any */

// EXERCISE 3.2: Generic functions
// Create a generic function to merge two objects
// In this exercise, you will write a function that merges two objects.
// The function should be flexible enough to merge any kind of objects and preserve the type of each property.
function mergeObjects<
  First extends Record<keyof any, unknown>,
  Second extends Record<keyof any, unknown>
>(obj1: First, obj2: Second): Omit<First, keyof Second> & Second {
  return { ...obj1, ...obj2 };
}

// Add type annotations to make this function generic and type-safe.
// The function should accept two objects and return a new object
// containing properties from both with their original types intact.

const user = { name: "Alice", age: 25 };
const address = { city: "London", postcode: "E1 6AN" };

const userDetails = mergeObjects(user, address);
// userDetails should have type: { name: string, age: number, city: string, postcode: string }

const readonlyUser = { name: "Alice", age: 25, postcode: '12 345' } as const;
const readonlyAddress = { city: "London", postcode: "E1 6AN" } as const;

const readonlyUserDetails = mergeObjects(readonlyUser, readonlyAddress);
// userDetails should have type: { readonly name: "Alice", readonly age: 25, readonly city: "London", readonly postcode: "E1 6AN" }
const postcode = readonlyUserDetails.postcode; // "12 345"
//    ^?

// Ignore the line below
export {};
