# unknown and any

In TypeScript, there are two special types: `unknown` and `any`.

They both represent values that can be anything. But there is a key difference between the two.

## any

Typing a variable as `any` tells TypeScript to ignore type-checking for that variable.

```ts
const value: any = 25;

// All of these are allowed because TypeScript
// ignores type-checking for "any" values
value.substring(1);
value.print()
value.foo()
```

TypeScript does not perform type-checking for variables with type `any`. This is dangerous, which is why there are ESLint rules and tsconfig settings that disallow the use of `any` in your codebase.

## Don't use any

99% of the time, your variables and function parameters would be restricted to some input value.

```ts
// WRONG
function jsonToString(json: any): string {
  return JSON.stringify(json);
}

// This should actually be something like:
function jsonToString(json: Record<string, unknown>): string {
  return JSON.stringify(json);
}
```

If you really need to use `any`, you should use `unknown` instead.

TypeScript will force you to type-check an `unknown` variable before you can use its value. You may do this with *type narrowing expressions*.

```ts
// GOOD: Using type narrowing expression
function processData1(data: unknown): string {
  if (typeof data === "string") {
    // Do something
  }
}
```

Unrecommended: You could also use type assertions with `as` to assert that a variable is of a certain type.

NOTE: This is DANGEROUS. You are manually overriding TypeScript's inference system. Unlike other languages like Java, typecasting using `as` is not a "real" operation. When the code is compiled, the type assertion is removed, which means that the type assertion is not checked at runtime.

```ts
// NOT SO GOOD: Using type assertion
function processData(data: unknown): string {
  const fullName = data as string; // This is not good!
  const firstName = fullName.split(' ').at(0);
}

processData(100); // This is valid, but it shouldn't be.
```

Instead, you should use type guards/type narrowing expressions to check the type of the variable.

Unlike type assertions which only exist in TypeScript, type guards are *real JavaScript functions* that check for the type of a variable. This means they will still exist after the code is compiled to JavaScript, and that they do actually check the type of the variable at runtime.

```ts
function isDataString(data: unknown): data is string {
  return typeof data === "string";
}

// GOOD: Using type guard
function processData(data: unknown): string {
  if (isDataString(data)) {
    // isDataString checks for type of "data" during runtime
    const fullName = data;
    const firstName = fullName.split(' ').at(0);
  }
}
```

In other words, there will only exist one case where it might make sense to have a value be able to take on "any" value. And this is when you are interacting with external data sources.

```ts
const data = await fetch(); // Fetch from some API
// ^ data: any

// Data is typed as any, because it can truly be anything
```

In this case, you should follow the approach in `unknown`, and type-check the data before using it.

## Summary

`any` turns off type-checking for a variable; it is not recommended to use it.

Instead, `unknown` should be used for function parameters/any unknown data.

It is highly recommended to have *NO INSTANCES* of explicit `any` annotations in your codebase.
