# Index Types

Index types in TypeScript allow you to query the type of properties within an object or record. This is useful when working with dynamically created keys or when you want to create types that depend on other types.

Imagine you have an object where you want to ensure that the keys match a specific set of values. In JavaScript, there is no inherent type checking for such structures. However, TypeScript provides the ability to enforce and infer types for object keys and values using index types.

## Using Index Types

Consider this basic object in JavaScript:

`const user = { name: 'John', age: 25 };`

You can define a TypeScript type that describes this structure, ensuring that all property names and types conform to a given shape.

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: 'John',
  age: 25
};
```

But what if you want to extract the type of a property dynamically? Index types allow you to reference properties using their keys, ensuring consistency across your code. For example:

```ts
type UserKeys = keyof User; // 'name' | 'age'
type UserName = User['name']; // string
```

## Index Signatures

If you're dealing with objects with unknown keys but want to enforce the type of values, you can use index signatures. For instance, you could create a map where all values are strings, but the keys are unknown.

```ts
type StringMap = {
  [key: string]: string;
};

const myMap: StringMap = {
  firstName: 'John',
  lastName: 'Doe'
};
```

The `[key: string]` indicates that any string key is valid, but the values must be of type `string`.

## Using Union Types with Index Types

You can use union types to limit the valid keys when working with index types. This ensures that only specific keys are allowed, making the code safer and more predictable. For example, let's say you have an object that can only have specific keys like `name`, `age`, and `email`:

```ts
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = 'name' | 'age' | 'email';
type PersonValues = Person[PersonKeys]; // string | number
```

Here, `PersonKeys` is a union of the allowed keys. By using this union with the index type `Person[PersonKeys]`, we can ensure that the possible types for a person's value are limited to `string` or `number`.

This can be particularly useful when you want to build functions or types that handle only a specific subset of an object’s properties.

```ts
function getPersonInfo(key: 'name' | 'email'): string {
  return person[key];
}
```

In this example, the `getPersonInfo` function accepts only `'name'` or `'email'` as valid keys, ensuring type safety and reducing the possibility of runtime errors.

## Enforcing Key Consistency

Index types are particularly useful for enforcing consistency when working with complex objects. For instance, if you want to make sure the keys of one object are a subset of another, or if you want to dynamically create types based on other types, index types are invaluable.
