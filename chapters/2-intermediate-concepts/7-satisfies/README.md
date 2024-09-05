# Using `satisfies` to check type conformation

So far, whenever we wish to assert that a variable conforms to a certain type, we use type annotations.

This helps us ensure that the assigned value is a valid assignment to the type.

```ts
type User = {
  name: string;
  age: number;
}

const user: User = {
  name: 'John'
}
// ^ Error: Property 'age' is missing in type '{ name: string; }' but required in type 'User'
```

We can also do so with the `satisfies` keyword.

```ts
type User = {
  name: string;
  age: number;
}

const user = {
  name: 'John'
} satisfies User;
// ^ Error: Property 'age' is missing in type '{ name: string; }' but required in type 'User'
```

## Benefit of using `satisfies`

The benefit of using `satisfies` is that it does not override the inferred type of the variable; it only ensures that the variable can be assigned to the type.

This is illustrated in the following example:

```ts

type Option = {
  key: string;
  value: string;
}

const themeOptionsWithAnnotations: Option[] = [
  {
    key: 'light',
    value: 'Light',
  },
  {
    key: 'dark',
    value: 'Dark',
  },
];
type ThemeWithAnnotation = typeof themeOptionsWithAnnotations[number];
//