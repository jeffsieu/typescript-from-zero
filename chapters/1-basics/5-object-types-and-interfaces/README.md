# Object types (and interfaces)

Often in JavaScript, you have something like this:

```js
// JavaScript
const person = {
  name: 'Alice',
  age: 25,
  isStudent: true,
};
```

This is how we can type it in TypeScript:

```ts
// TypeScript

// Person is an object type
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

const person: Person = {
  name: 'Alice',
  age: 25,
  isStudent: true,
};
```

The syntax for object types is similar to JavaScript object literals, except that each key maps to a type instead of a value.

Notice the similarity between the two:

```ts
// Notice that the object type and the object literal look similar
type User = {
  name: string;
  age: number;
}

const user: User = {
  name: 'Alice',
  age: 25,
}
```

## Interfaces

TypeScript also allows you to define an `interface`. This would be familiar for those coming from object-oriented languages like Java or C#.

Interfaces are essentially object types, but with a different syntax:

```ts
// Interface
interface User {
  name: string;
  age: number;
}

type User = {
  name: string;
  age: number;
}
```

The two are mostly equivalent and essentially interchangable. You may use the syntax that you prefer.

> Note: There is a small difference between the two, which we will cover in an advanced topic. Only interfaces can be used for declaration merging and module augmentation. Until then, you may ignore this.

## Extending types/interfaces

You can extend interfaces by using the `extends` keyword:

```ts
type User {
  name: string;
  age: number;
}

interface UserWithRole extends User {
  role: string;
}
// ^ UserWithRole: { name: string, age: number, role: string }
```

You can also extend types using `&`:

```ts
type User = {
  name: string;
  age: number;
}

type UserWithRole = User & {
  role: string;
}
// ^ UserWithRole: { name: string, age: number, role: string }
```
