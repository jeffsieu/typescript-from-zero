// EXERCISE 7.1: Implement utility types using mapped types

// TODO: Implement a 'ReadonlyDeep' type that makes all properties and nested properties of T readonly

type ReadonlyDeep<T> = // Your implementation here

// TODO: Implement a 'PickByType' type that constructs a type by picking all properties
// from T that are assignable to U

type PickByType<T, U> = // Your implementation here

// TODO: Implement a 'FunctionPropertyNames' type that extracts the names of all function properties from T

type FunctionPropertyNames<T> = // Your implementation here

// Test your implementations
interface TestObject {
  a: number;
  b: string;
  c: boolean;
  d: {
    e: number;
    f: string;
  };
  g: () => void;
  h: (x: number) => string;
}

// Should make all properties deeply readonly
type DeepReadonlyTest = ReadonlyDeep<TestObject>;

// Should only include 'a' and 'e'
type PickByTypeTest = PickByType<TestObject, number>;

// Should only include 'g' and 'h'
type FunctionNamesTest = FunctionPropertyNames<TestObject>;

// Test your implementations here
const readonlyObject: DeepReadonlyTest = {
  a: 1,
  b: "test",
  c: true,
  d: {
    e: 2,
    f: "nested"
  },
  g: () => {},
  h: (x) => x.toString()
};

// This should cause type errors:
// readonlyObject.a = 2;
// readonlyObject.d.e = 3;

const pickedByType: PickByTypeTest = {
  a: 1,
  d: {
    e: 2,
    f: "this should cause an error"
  }
};

const functionNames: FunctionNamesTest = "g" as const;

// ignore the line below
export {};