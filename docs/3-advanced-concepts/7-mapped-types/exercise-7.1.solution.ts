/* eslint-disable @typescript-eslint/no-explicit-any */
// EXERCISE 7.1: Mapped types
// Implement utility types using mapped types

// TODO: Implement a 'ReadonlyDeep' type that makes all properties and nested properties of T readonly

type ReadonlyDeep<T> = {
  readonly [K in keyof T]: ReadonlyDeep<T[K]>
}

type A = ReadonlyDeep<{a: {b: {c: string}}}>
//   ^?

const a: A = {
  a: {
    b: {
      c: ''
    }
  }
}
// a.a.b.c = ""; // This should cause a type error


// TODO: Implement a 'PickByType' type that constructs a type by picking all properties
// from T that are assignable to U
type PickByType<T, U> = {
  [K in keyof T as (T[K] extends U ? K : T[K] extends Record<string, unknown> ? K : never)]: PickByType<T[K], U>
}

type Picked = PickByType<{a: number, b: string, c: {d: string, e: number}, d: number}, string>
//   ^?


const picked: Picked = {
  b: '',
  c: {
    d: '',
  }
}

// TODO: Implement a 'FunctionPropertyNames' type that extracts the names of all function properties from T

type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

// should output "g" | "h"
type FunctionPropertyNames<T> = {
  [K in keyof T]: (IsFunction<T[K]> extends true ? K : never) | (T[K] extends Record<string, unknown> ? FunctionPropertyNames<T[K]> : never)
}[keyof T]

type FTest = FunctionPropertyNames<{a: string, f: () => void, b: { g: () => void}}>
//   ^?


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
    // f: "this should cause an error"
  }
};

const functionNames: FunctionNamesTest = "g" as const;

// ADDITIONAL CONTENT FROM LESSON BELOW
type ExtractGetters<T> = {
  [K in keyof T & `get${string}`]: T[K]
}

type User = {
  id: string;
  getId: () => string;
}

type UserGetters = ExtractGetters<User>;
//   ^?

// ignore the line below
export {};