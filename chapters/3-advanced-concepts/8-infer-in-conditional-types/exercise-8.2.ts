// EXERCISE 8.2: Infer in conditional types
// Implement advanced type utilities using infer in conditional types

// 1. Implement a 'DeepAwaited' type that extracts the value type from deeply nested Promises
// Example: DeepAwaited<Promise<Promise<string>>> should be string
// Clue: Use infer with recursion

type DeepAwaited<T> = ; // Your implementation here
type DeepAwaitedTest = DeepAwaited<Promise<Promise<Promise<number>>>>;
//   ^?
const deepAwaitedTest: DeepAwaitedTest = 42;

// 2. Implement an ReturnTypes type that returns an object type
// with only keys that are functions that return a string. The value
// would be the return type of the function matching that key.
// Example: ReturnTypes<{
//           getValue: () => string; 
//           value: string;
//           getStatus: () => 'active' | 'inactive';
//          }>
//          should be {
//            getValue: string;
//            getStatus: 'active' | 'inactive';
//          }

type ReturnTypes<T> = ; // Your implementation here
type ReturnTypesTest = ReturnTypes<{
//   ^?
  onChange: (value: string) => void;
  getValue: () => string;
  getStatus: () => 'active' | 'inactive';
  value: string;
  date: Date;
}>;
const returnTypesTest: ReturnTypesTest = {
  getValue: "",
  getStatus: "active",
};

// ignore the line below
export {};