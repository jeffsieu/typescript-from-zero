# Introduction to type annotations

In TypeScript, you can specify the type of a variable, function, or class by adding *type annotations*.

This helps you catch bugs in your code before you run it, and makes your code more readable and maintainable.

To appreciate the benefits of having types, let's first look at a problem with Javascript.

## The problem with Javascript

Here, we have a Javascript function `add`, which takes in `a` and `b` as parameters, and returns the sum of `a` and `b`. Pretty straightforward.

```ts
// add.js (Javascript)
function add(a, b) {
  return a + b;
}
```


We know that `a` and `b` should be numbers because we are adding them together. However, our IDE (and whatever we are running JavaScript on) doesn't know that.

In fact, we can pass in any value to `add` and it will still run.

```js
// add.js (Javascript)
function add(a, b) {
  return a + b;
}

console.log(add(1, 2)) // 3; Runs as expected
console.log(add("Hello", "World")) // Should not run, but it does
console.log(add({}, [])) // Should not run, but it does
```

TypeScript allows us to catch these logical errors before we even run our code.

## Converting to TypeScript

Firstly, we have to rename our file from `add.js` to `add.ts`. This tells TypeScript that this file is a TypeScript file.
> Note: For frontend developers using React, you will be converting your component from `MyComponent.js` to the JSX-enabled `MyComponent.tsx` instead.

Immediately, we will get the following error from TypeScript:

```ts
// add.ts
function add(a, b) {
  //         ^ Error: Parameter 'a' implicitly has an 'any' type.
  return a + b;
}
```

This error is telling us that TypeScript doesn't know the type of `a`. We can fix this by adding a type annotation to `a` (and `b`).

> Side note: This error will only be shown if you have `noImplicitAny` set to true in your `tsconfig.json` file. In our case, we have `strict` set to true, which enables `noImplicitAny`. In general, you want `strict` mode to be true as this enables all strict type checking options, which will help you catch more bugs in your code.

## Annotating variables and parameters

We will obtain the following code after adding type annotations to `a` and `b`:

```ts
// add.ts (revised)

// Note: we added type annotations to a and b
function add(a: number, b: number): number {
//              ^^^^^^     ^^^^^^ . ^^^^^^
  return a + b;
}
```

In Typescript, type annotations are done by adding the type after the variable name, separated by a colon `:`. In this case, we are specifying that `a` and `b` are of type `number`.

Here are more examples of type annotations:

```ts
// ORIGINAL: index.js (Javascript)
const isActive = true
const message = "Hello, World!"
const age = 25

function greet(name) {
  return `Hello, ${name}!`
}

///////////////////////////////////////////
// ANNOTATED: index.ts (Typescript)
const isActive: boolean = true
const message: string = "Hello, World!"
const age: number = 25

// Greet is a function that takes in a string and returns a string
function greet(name: string): string {
  return `Hello, ${name}!`
}
```

## Annotating return types

As you can see from the previous examples, we can also annotate the return type of a function. This makes TypeScript check that the function returns the correct type.

```ts
// Returning wrong type
function getAge(): number {
  return "25" // Error: Type 'string' is not assignable to type 'number'
}

// Missing return value
function getAge(): number {
  // Error: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
}

// Returning correct type
function getAge(): number {
  return 25 // No error
}
```

## Summary

To summarize, here are the following ways to add type annotations.

```ts
// Replace <type> with the type you want to specify
const a: <type> = ...

function myFunction(param1: <type>, param2: <type>): <type> {

}

const myArrowFunction = (param1: <type>, param2: <type>): <type> => {

}
```

Here are some common basic types you can use:

- `number`
- `string`
- `boolean`
- `null`
- `undefined`

## Exercise 1.1

Try adding some type annotations yourself.
