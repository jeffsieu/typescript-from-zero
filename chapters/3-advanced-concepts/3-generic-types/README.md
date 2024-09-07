# Generic types

Generics in TypeScript allow you to create reusable, flexible, and type-safe components. Instead of creating multiple versions of a function or class to handle different types, you can use generics to create a single version that works with various types, while still ensuring type safety.

Generics are particularly useful in situations where you need to write code that works with multiple types but you want to ensure that the operations you perform are consistent with the types involved.

## Example: Fetching API Data

Imagine you're building an application that fetches data from an API. Each API endpoint may return different types of data. Instead of writing separate functions to handle the different data types, you can write a single generic function that works with any type of data.

Let's look at a standard fetch operation in JavaScript:

```ts
async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

In this example, the `fetchData` function uses `any` for the return type, which means TypeScript can't help you with type safety. The consumer of this function will have to figure out what type of data is being returned, which can lead to runtime errors if misused.

By introducing generics, we can make this function type-safe and flexible:

```ts
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data as T;
}
```

Now, when calling `fetchData`, you can specify the expected return type. TypeScript will ensure that the function returns data of the correct type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUserData() {
  const user = await fetchData<User>('https://api.example.com/user');
  console.log(user.name); // TypeScript knows `user` has a `name` property
}
```

## Generics in arrays and collections

Another common use case for generics is working with collections of items, such as arrays. For instance, if you wanted to create a function that filters an array based on a certain condition, you can make that function generic to work with arrays of any type.

```ts
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}
```

This function can now be used with arrays of any type, and TypeScript will maintain type safety.

```ts
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, num => num % 2 === 0);

const words = ['apple', 'banana', 'cherry'];
const filteredWords = filterArray(words, word => word.length > 5);
```

## Constraints in generics

While generics offer flexibility, sometimes you need to restrict the types that can be used. This is done by adding constraints.

For example, let's say you only want to allow types that have a `length` property (like strings or arrays). You can enforce this with a constraint:

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

This ensures that only objects with a `length` property are passed in, avoiding runtime errors.

## Summary

Generics provide a way to write reusable, flexible, and type-safe code. They are especially useful in situations where you need to handle multiple types but want to maintain strict type safety. Generics can be applied to functions, arrays, classes, and more, making your TypeScript code more robust and maintainable.
