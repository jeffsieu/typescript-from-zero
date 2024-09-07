# Discriminated Unions

Discriminated unions, also known as tagged unions or algebraic data types, are a powerful feature in TypeScript that allows you to create types which are a union of other types, but can be easily differentiated based on a common, literal property.

## Basic Structure

A discriminated union typically consists of:

1. A common property (the "discriminant") with literal types
2. A union of types that each have this property

```ts
type Square = {
  kind: "square";
  size: number;
};

type Circle = {
  kind: "circle";
  radius: number;
};

type Shape = Square | Circle;
```

Here, `kind` is the discriminant property.

## Type Narrowing

The discriminant allows TypeScript to narrow down the type within conditional blocks:

```ts
function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}
```

## Exhaustiveness Checking

TypeScript can perform exhaustiveness checking with discriminated unions:

```ts
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function area(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      return assertNever(shape);
  }
}
```

If we add a new shape without updating this function, TypeScript will give us an error.

## Use Cases

Discriminated unions are particularly useful for:

1. Modelling state in applications
2. Handling different types of API responses
3. Representing different variants of a data structure

They provide a way to model complex data structures whilst maintaining type safety and enabling powerful type inference.



```

## Exercise 1.2
```ts

```