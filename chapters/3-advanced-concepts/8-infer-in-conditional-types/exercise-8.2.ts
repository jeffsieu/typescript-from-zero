// EXERCISE 8.2: Infer in conditional types
// Implement advanced type utilities using infer in conditional types

// TODO: Implement a 'DeepPromiseValueType' type that extracts the value type from deeply nested Promises
// Example: DeepPromiseValueType<Promise<Promise<string>>> should be string

type DeepPromiseValueType<T> = // Your implementation here

// TODO: Implement a 'ExtractFunctions type that extracts all properties of T that are functions
// Example: ExtractFunctions<{ a: () => void; b: string; c: (x: number) => number }>
// should be { a: () => void; c: (x: number) => number }

type ExtractFunctions<T> = // Your implementation here

// TODO: Implement a 'UnionToTuple' type that converts a union to a tuple type
// Hint: You'll need to use recursive conditional types and infer
// Example: UnionToTuple<'a' | 'b' | 'c'> should be ['a', 'b', 'c'] (or any permutation)


// Test your implementations
type DeepPromiseValueTypeTest = DeepPromiseValueType<Promise<Promise<Promise<number>>>>;

type ExtractFunctionsTest = ExtractFunctions<{
  a: () => void;
  b: string;
  c: (x: number) => number;
  d: Date;
}>;

type UnionToTupleTest = UnionToTuple<'a' | 'b' | 'c'>;

// Verify your implementations

const deepPromiseValueTypeTest: DeepPromiseValueTypeTest = 42;

const extractFunctionsTest: ExtractFunctionsTest = {
  a: () => {},
  c: (x) => x * 2
};

// ignore the line below
export {};