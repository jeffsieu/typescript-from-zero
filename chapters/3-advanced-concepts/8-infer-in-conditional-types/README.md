# Infer in Conditional Types

The `infer` keyword in TypeScript is a powerful feature used within conditional types to infer (extract) type information. It allows you to capture and use types that are matched within a conditional type, enabling complex type transformations and pattern matching on types.

## Basic Syntax

The basic syntax for using `infer` looks like this:

```ts
type InferredType<T> = T extends infer U ? U : never;
```

Here, `U` is a type variable that is inferred from `T`.

## Practical Usage

`infer` is particularly useful when working with complex types, such as function types, promise types, or nested object types.

A lot of useful built-in helper types in TypeScript are actually built using `infer` under the hood.

### Inferring Return Types

You can use `infer` to extract the return type of a function:

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type Func = (x: number) => string;
type FuncReturnType = MyReturnType<Func>; 
//   ^ FuncReturnType: string
```

### Inferring Promise Types

You can extract the type wrapped by a Promise:

```ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseType = UnwrapPromise<Promise<number>>; // number
```

### Inferring Array Element Types

You can extract the element type of an array:

```ts
type ArrayElement<T> = T extends (infer U)[] ? U : never;

type NumberArray = ArrayElement<number[]>; // number
```

## Multiple Inferences

You can use multiple `infer` keywords in a single conditional type:

```ts
type FirstAndLast<T extends any[]> = T extends [infer F, ...any[], infer L] ? [F, L] : [never, never];

type FL = FirstAndLast<[1, 2, 3, 4]>; // [1, 4]
```

The `infer` keyword, combined with conditional types, provides a powerful way to perform type-level programming in TypeScript, enabling complex type transformations and pattern matching on types.
