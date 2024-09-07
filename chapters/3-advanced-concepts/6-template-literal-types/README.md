# Template literal types

Template literal types in TypeScript allow you to create new string types by combining literal types with embedded expressions, similar to how string templates work in JavaScript. This is a powerful way to build dynamic types that depend on other types, making type definitions more flexible and descriptive.

A template literal type is written using backticks (`` ` ``) with placeholders for types:

```ts
type Greeting = `Hello, ${string}`;
const validGreeting: Greeting = 'Hello, World'; // Valid
```

This means `Greeting` can be any string that starts with `"Hello, "` followed by any other string.

## Use case 1: Defining dynamic string types

Template literal types allow you to create specific, dynamic string patterns, such as constructing valid routes for a URL system.

For example:

```ts
type Route = `/users/${string}/posts/${number}`;
```

This defines `Route` as a template literal type that represents paths like `/users/john/posts/123`. It ensures that:

- The second part is always a `string`, representing a user.
- The fourth part is always a `number`, representing a post ID.

This can be used to strongly type string patterns throughout an application, reducing potential errors when constructing or validating routes.

```ts
// Valid
const validRoute: Route = '/users/john/posts/123';

// Error: Type '"/users/john/posts/abc"' is not assignable to type 'Route'
const invalidRoute: Route = '/users/john/posts/abc';
```

## Extending existing string types

Template literal types can also help you extend existing string types. For instance, you might want to add prefixes or suffixes to existing types.

```ts
type PrefixHello<T extends string> = `Hello, ${T}`;

type Example = PrefixHello<"World">; // "Hello, World"
```

This helper type appends `"Hello, "` to any string type passed to it, which can be useful for generating descriptive labels, keys, or identifiers dynamically.

## Template literal types with unions

You can combine template literal types with union types to create flexible string structures.

```ts
type UserRole = 'admin' | 'user' | 'guest';
type WelcomeMessage = `Welcome, ${UserRole}!`;

const message: WelcomeMessage = "Welcome, admin!"; // Valid
```

In this case, `WelcomeMessage` can be one of `"Welcome, admin!"`, `"Welcome, user!"`, or `"Welcome, guest!"`, making the type both dynamic and constrained.
