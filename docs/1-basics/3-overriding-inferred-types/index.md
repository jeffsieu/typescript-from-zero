# Overriding inferred types

Sometimes, you will need to override the types that TypeScript infers. This can be done by explicitly annotating the type of a variable or function.

Consider the following example:

```ts
let backgroundColor = null;

if (hasBackgroundColor) {
  backgroundColor = "red"; // Error: Type 'string' is not assignable to type 'null'
}
```

TypeScript will throw an error, because we are trying to assign a `string` to a variable that is inferred to be of type `null`.

In reality, we know that `backgroundColor` can either be `null` or `string`. To fix this, we can explicitly annotate the type of `backgroundColor`:

```ts
let backgroundColor: string | null = null;

if (hasBackgroundColor) {
  backgroundColor = "red"; // No error
}
```

Notice that we have annotated `backgroundColor` to be of type `string | null`. This tells TypeScript that `backgroundColor` can be either a `string` or `null`.

## Example 3.1: React

This is a common pattern when working with React.

Consider the following example, where the type of `useState` is wrongly inferred:

```ts
const [name, setName] = useState(null);

// TypeScript only allows us to set `name` to `null`
setName("Alice"); // Error: Argument of type 'string' is not assignable to parameter of type 'SetStateAction<null>'

```

Instead, we explicitly say that `name` can be either a `string` or `null`:

> Note: This uses the `useState` hook from React, which is a generic function. More about generic functions will be covered in the intermediate section.

```ts
const [name, setName] = useState<string | null>(null);

setName("Alice"); // No error
```

## Better code = fewer explicit type annotations

Often, we are forced to make explicit type annotations because our code is not well structured.

Consider the following example you have seen earlier:

```ts
let backgroundColor: string | null = null;

if (hasBackgroundColor) {
  backgroundColor = "red"; // No error
}
```

If we had structured our code better, we could have avoided the explicit type annotation:

```ts
const backgroundColor = hasBackgroundColor ? "red" : null;
```

By making use of `const` to declare `backgroundColor` only once, we can avoid the need for explicit type annotations.

It is also easier to understand our code because our variable is immutable. Try to use `const` declarations instead of `let` whenever possible to make your code more readable.

> Good to know: TypeScript infers the type of a variable based on its first assignment. It will choose "narrowest" type that fits all values assigned to the variable. This is known as the "best common type".
> See https://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type.

## Exercise 3.1

Add explicit type annotations to fix the TypeScript errors