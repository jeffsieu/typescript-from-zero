# Conditional Types

Conditional types are a powerful feature in TypeScript that allow you to make type decisions based on conditions. This can help you create more flexible and reusable types.

## Types based on other types

Let's say you have a function that can take a value of either string or number type. You can use union types to represent this:

```ts
function wrapData(value: string | number) {
  // ...
}
```

However, what if you want to return an object with a type property that indicates whether the value is a string or a number? Union types alone can't help you with this.

### Introducing Conditional Types

Conditional types allow you to make type decisions based on conditions. The syntax is as follows:

```ts
T extends U ? X : Y
```

This means "if T is assignable to U, then the type is X, otherwise the type is Y".

### Example: Wrap Data

Let's go back to our previous example. We can use conditional types to return an object with a type property based on the type of the input value:

```ts
type WrapData<T> = T extends string ? { data: T, type: 'string' } : { data: T, type: 'number' };

function wrapData<T>(value: T): WrapData<T> {
  return { data: value, type: typeof value === 'string' ? 'string' : 'number' };
}
```

In this example, the `WrapData` type uses a conditional type to return an object with a type property that is either `'string'` or `'number'` based on whether the input type `T` is a string or a number.

## Excl