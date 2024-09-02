# Inferred types

> Reference: https://www.typescriptlang.org/docs/handbook/type-inference.html

Take a look at the following piece of Typescript code:

```ts

function getUserGreeting(name: string, age: number): string {
  const isUserOld: boolean = age > 60;
  const isNameCapitalized: boolean = name[0] === name[0].toUpperCase();
  const isAgeEven: boolean = age % 2 === 0;

  // do more stuff
  // return greeting
}

```

In the above example, we have annotated the types of `isUserOld`, `isNameCapitalized`, and `isAgeEven` to be `boolean`. However, we can remove these type annotations and TypeScript will still be able to infer the types of these variables.

This is because TypeScript has a smart type inference system that can infer the types of variables based on their usage.

Therefore, we can rewrite the above code as:

```ts
function getUserGreeting(name: string, age: number): string {
  const isUserOld = age > 60;
  const isNameCapitalized = name[0] === name[0].toUpperCase();
  const isAgeEven = age % 2 === 0;

  // do more stuff
  // return greeting
}
```

Notice that the code is now cleaner, more concise and easier to read.

In general, It is a good practice to let TypeScript infer types whenever possible, as it reduces the amount of boilerplate code you need to write.

In fact, you may choose not to annotate the types of function return types, as TypeScript can infer these as well.

```ts
function getAge() {
  return 25; // TypeScript can infer that this function returns a number
}
```

However, there are cases where you may want to explicitly annotate types, such as when you want to provide additional context to the reader or when TypeScript is unable to infer the type.

These cases will be covered in later chapters. For now, when it is clear what a function should return, you can let TypeScript infer the return type. Otherwise, you should explicitly annotate the return type.

## Exercise 2.1

Make the code more concise by identifying and removing unnecessary type annotations.
