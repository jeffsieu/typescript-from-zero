# Optional Types and Parameters

In TypeScript, optional types and parameters allow you to define values that may or may not be present. This is useful when you want to create flexible interfaces or functions that can work with varying amounts of information.

## Optional Properties

You can mark object properties as optional by adding a `?` after the property name:

```typescript
interface Person {
  name: string;
  age?: number;
}
```

In this example, `age` is optional. You can create a `Person` object with or without specifying the `age`.

## Optional Parameters

Similarly, function parameters can be made optional:

```typescript
function greet(name: string, greeting?: string) {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}
```

Here, `greeting` is an optional parameter. You can call `greet` with just a name, or with both a name and a greeting.

## Optional Chaining

TypeScript 3.7 introduced optional chaining, which allows you to safely access nested properties that might be undefined:

````typescript
type User = {
  name: string;
  address?: {
    street: string;
    city: string;
  };
};

function getCity(user: User): string | undefined {
  return user.address?.city;
}
````

The `?.` operator checks if `address` exists before trying to access `city`.

## Nullish Coalescing

The nullish coalescing operator `??` provides a way to fallback to a default value when dealing with `null` or `undefined`:

```typescript
function getUsername(user: { name: string; username?: string }) {
  return user.username ?? user.name;
}
```

This returns `user.username` if it exists, otherwise it falls back to `user.name`.
