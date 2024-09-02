# Readonly types and as const

In TypeScript, you can use `as const` to declare that an object is immutable.

A variable declared with `as const` is a read-only variable. This means that you cannot reassign the variable, and you cannot change the properties of the object.

```ts
const obj = {
  key: "value",
} as const;

obj.key = "new value"; // Error: Cannot assign to 'key' because it is a read-only property
```

When using `as const`, TypeScript will change the way it infers the type of the object. Because the object won't change its values, TypeScript can narrow down its type inference and infer the type much more specifically.

```ts
const obj = {
  key: "value",
} as const;
// ^ obj: {
//     readonly key: "value";
//   }

// This means: obj is an object with a field "key"
// with value="value"
```

You can also use `readonly` for read-only arrays and object fields.

```ts
const object: { readonly key: string } = {
  key: "value",
};

const readonlyArray: readonly number[] = [1, 2, 3];

object.key = "new" // Error: Cannot assign to 'key' because it is a read-only property
readonlyArray[0] = 4; // Error: Index signature in type 'readonly number[]' only permits reading
```

## Use cases

Let's explore some use cases where we might want to make variables readonly.

### Use case 1: Returning a tuple

Consider the following function that returns the name and age of a person:

```ts
function getPerson() {
  const name = 'Alice';
  const age = 25;
  return [name, age];
}

const [name, age] = getPerson();
// ^ name: string | number
```

In the above example, `name` is incorrectly inferred as `string | number`. This is because `getPerson` returns an array with inferred type `(string | number)[]`.

We know that the first element of the array will always be a `string`, and the second element will always be a `number`. We can use `as const` to tell TypeScript that the array will never change:

```ts
function getPerson() {
  const name = 'Alice';
  const age = 25;
  return [name, age] as const;
}

const [name, age] = getPerson();
// ^ name: "Alice"
```

Here, TypeScript is even able to infer that `name` is `"Alice"` and `age` is `25`.

### Use case 2: Enforce immutability of constants

We can use `as const` to enforce immutability of constants:

Consider this example:

```ts
const config = {
  dangerousSetting: false,
};

config.dangerousSetting = true; // No error; We want to prevent users from changing this
```

The way we can do this is by using `as const`:

```ts
const config = {
  dangerousSetting: false,
} as const;

config.dangerousSetting = true; // Throws error as expected
// ^^^^^ Cannot assign to 'dangerousSetting' because it is a read-only property.
```

This works because `as const` tells TypeScript that the value before it will NEVER be changed; it makes the type of the objects keys `readonly`.

In fact, you can see the difference in inferred type when you use `as const`:

```ts
const configNoConst = {
  dangerousSetting: false,
};
// ^ configNoConst: {
//     dangerousSetting: boolean;
// }

const config = {
  dangerousSetting: false,
} as const;
// ^ config: {
//     readonly dangerousSetting: false;
// }
```

## `Readonly<T>`

You may use `Readonly<T>` to make a read-only version of an existing object type:

```ts
interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: 'Alice',
  age: 25,
};

user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property
```