# Intersection types

In TypeScript, you can combine types using intersection types.

We do this using the `&` operator.

```ts
type NamedEntity = { name: string };
type AgedEntity = { age: number };

type Person = NamedEntity & AgedEntity;
// ^ { name: string, age: number }
```

You may read `&` as "and". So, a `Person` is a `NamedEntity` and an `AgedEntity`.

We have seen union types in a previous chapter, where a variable could be one of several types. The `|` could be read as "or".

```ts
type StringOrNumber = string | number;
```

Intersection types are the opposite of union types. A variable of an intersection type has all the properties of all the types it is composed of.

## Use cases

### Use case 1: Deriving new types from existing types

Consider `User` and `UserWithRole` types:

```ts
type User = {
  id: string;
  name: string;
}

type UserWithRole = {
  id: string;
  name: string;
  role: string;
}
```

This works, but every time we update the `User` type, we have to remember to update the `UserWithRole` type as well. This can lead to bugs if we forget to update both types together.

Instead, we can use intersection types to define `UserWithRole` with `User`:

```ts
type User = {
  id: string;
  name: string;
}

type UserWithRole = User & {
  role: string;
}
```

This way, whenever we update fields in `User`, `UserWithRole` will automatically update as well.

### Use case 2: Constraining existing types

Consider a function that accepts a `User` type:

```ts
type User = {
  id: string;
  name: string;
  isAdmin: boolean;
}
```

We can use intersection types to create `AdminUser`, which is a `User` with `isAdmin` set to `true`:
```ts
type User = {
  id: string;
  name: string;
  isAdmin: boolean;
}

type AdminUser = User & {
  isAdmin: true;
}
```

This works because `AdminUser` has to satisfy both `User` and `{ isAdmin: true }`.

> P.S. Trying intersecting types which are not compatible

.