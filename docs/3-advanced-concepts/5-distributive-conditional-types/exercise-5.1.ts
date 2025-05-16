// EXERCISE 5.1: Distributive conditional types
// Implement utility types using distributive conditional types

// TODO: Implement an 'Flatten' type that flattens array types one level deep
// Hint: Use distributive conditional types
// Example: Flatten<(number | string)[]> should be number | string

type Flatten<T> = // Your implementation here

// TODO: Implement a 'NonNullable' type that removes null and undefined from a type
// Example: NonNullable<string | number | null | undefined> should be string | number

type NonNullable<T> = // Your implementation here

// TODO: Implement an 'ExtractTypeByKey' type that extracts a type from a union of objects based on a key
// Example: ExtractTypeByKey<{type: 'a', value: number} | {type: 'b', value: string}, 'type', 'a'>
// should be {type: 'a', value: number}

type ExtractTypeByKey<T, K extends keyof T, V extends T[K]> = // Your implementation here

// Test your implementations
type FlattenTest1 = Flatten<(number | string)[]>;
type FlattenTest2 = Flatten<[number, string, boolean]>;

type NonNullableTest = NonNullable<string | number | null | undefined>;

type Content = | { type: 'text'; content: string }
               | { type: 'image'; url: string }
               | { type: 'video'; duration: number };
type Image = ExtractTypeByKey<
  Content,
  'type',
  'image'
>;

// Verify your implementations
const flattenTest1: FlattenTest1 = 42;
const flattenTest2: FlattenTest2 = true;

const nonNullableTest: NonNullableTest = "hello";
// This should cause a type error:
// const nonNullableTestError: NonNullableTest = null;

const image: Image = { type: 'image', url: 'https://example.com/image.jpg' };
// This should cause a type error:
// const extractTypeByKeyTestError: ExtractTypeByKeyTest = { type: 'text', content: 'Hello' };

// ignore the line below
export {};