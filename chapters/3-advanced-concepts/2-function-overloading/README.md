# Function overloading

Function overloading in TypeScript allows you to define multiple signatures for a function, enabling different input and output types for different use cases. This is useful when a function can behave differently based on the types of arguments passed to it.

In JavaScript, functions are flexible and can accept any type of argument. However, this can lead to unpredictable behaviour if the wrong types are passed. TypeScript overloading ensures that functions behave consistently and return expected types depending on the input.

## Basic usage

In TypeScript, you can declare multiple function signatures, but only one function implementation.

Here’s a basic example, where we have a function that accepts an optional default value:

```ts
// Function signatures
function getStringValue(): string | undefined;
function getStringValue(defaultValue: string): string;

// Implementation
function getStringValue(defaultValue?: string) {
  const value = getStringValueFromSomewhereElse();
  return value ?? defaultValue ?? undefined;
}

// Usage
const valueNoDefaultValue = getStringValue();
// ^ valueNoDefaultValue: string | undefined
const valueWithDefaultValue = getStringValue("42");
// ^ valueWithDefaultValue: string
```

Unlike other languages, TypeScript does not support function overloading. You can use type guards (like `typeof`) to handle the different cases based on the parameter type.

## Why function overloading?

Function overloading becomes useful when:

- A function’s behaviour depends on the type of its parameters.
- The return type is different based on the input type.
