# Function Overloading

Function overloading in TypeScript allows you to define multiple signatures for a function, enabling different input and output types for different use cases. This is useful when a function can behave differently based on the types of arguments passed to it.

In JavaScript, functions are flexible and can accept any type of argument. However, this can lead to unpredictable behaviour if the wrong types are passed. TypeScript overloading ensures that functions behave consistently and return expected types depending on the input.

## Basic Example of Overloading

In TypeScript, you can declare multiple function signatures, but only one function implementation. Here’s a basic example:

```ts
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: any, b: any): any {
  return a + b;
}
```

In this case, `sum` can accept either two numbers or two strings. TypeScript will enforce that only these two combinations are allowed.

```ts
console.log(sum(1, 2)); // Works, returns 3
console.log(sum('Hello, ', 'World!')); // Works, returns 'Hello, World!'

// Invalid cases
console.log(sum(1, 'World!')); // Error: No overload matches this call
```

## Why Use Function Overloading?

Without overloading, you would often rely on `any` to handle different types, which negates the type safety TypeScript provides. Overloading allows you to maintain flexibility in the input types while still enforcing strict type checks.

Function overloading becomes useful when:

- A function’s behaviour depends on the type of its parameters.
- The return type is different based on the input type.
- You want to define a clear API for your function.

## TypeScript Function Signature

When using function overloading, you declare multiple signatures at the top and provide a single implementation:

```ts
function example(param: number): string;
function example(param: string): string[];
function example(param: any): any {
  if (typeof param === 'number') {
    return param.toString();
  } else if (typeof param === 'string') {
    return param.split('');
  }
}
```

In the implementation, you can use type guards (like `typeof`) to handle the different cases based on the parameter type.

### Exercise 2.1

In the exercise, you will overload a function that handles different types of input. Focus on creating distinct signatures and ensuring the function behaves differently for each type.
