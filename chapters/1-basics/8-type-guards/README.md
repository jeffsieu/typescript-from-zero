# Type guards

Type guards are special functions in TypeScript that help you narrow down the type of a variable within a block of code. They are one of the best ways to type check your code without using type assertions.

## Defining type guards using the `is` keyword

Type guards are defined using the `is` keyword. Here's an example:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const value: unknown = "Hello, world!";
if (isString(value)) {
  console.log(value.toUpperCase());
  // ^ value: string
}
```

In the above example, `isString` is a type guard that checks if the `value` is a string. If the check passes, TypeScript narrows down the type of `value` to `string`.

Type guards can also be used in `array.filter` to narrow down the type of elements in an array:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const values: unknown[] = ["Hello", 42, "world", 100];
const strings = values.filter(isString);
// ^ strings: string[]
```

## Built-in type narrowing expressions

There are some built-in type narrowing expressions in TypeScript that you can use:

- `typeof` type guards - checks the type of a variable using the `typeof` operator
- `instanceof` type guards - checks if a variable is an instance of a class
- `in` type guards - checks if a property exists in an object
- `Array.isArray` type guards - checks if a variable is an array



These are illustrated in the following examples:

```ts
// Type guard for primitives
function doSomethingToString(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
    // ^ value: string
  }
}

// Type guard for classes
function parseDate(value: Date | string) {
  if (value instanceof Date) {
    return date;
    // ^ value: Date
  }
  return new Date(value);
}

// Type guard for objects
function printName(value: unknown) {
  if ("name" in value) {
    console.log(value.name);
    // ^ value: { name: string }
  }
}

// Type guard for arrays
function double(value: number | number[]) {
  if (Array.isArray(value)) {
    return value.map((x) => x * 2);
    // ^ value: number[]
  }
  return value * 2;
}
```

## Control flow analysis

Type guards and type narrowing expressions work is due to TypeScript's control flow analysis.

TypeScript analyzes the flow of your code and intelligently narrows down the type of a variable based on the conditions that are met.

This is also how the type narrowing worked in the previous chapter of literal unions:

```ts
// Type narrowing of literal unions
function move(to: 'start' | 'end') {
  if (to === 'start') {
    console.log(to);
    // ^ to: 'start'
  } else {
    // to: 'end'
  }
}

// Type narrowing using type guards
type User = { name: string };

function isUser(user: unknown): user is User {
  return typeof user === "object" && "name" in user;
}

function processData(data: unknown) {
  if (isUser(data)) {
    console.log(data.name);
    // ^ data: { name: string }
  }
}
```
