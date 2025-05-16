# Type assertions

There is another way to override inferred types: type assertions.

You may use a type assertion with `as` to tell TypeScript more about a type that it doesn't know about.

Consider the example where we know the expected return value from the server:

```ts

async function getDataFromServer() {
  const response = await fetch("https://api.example.com/data");

  const data = await response.json();
  // ^ data: any

  console.log(data.name);
  // ^ Error: Property 'name' does not exist on type 'unknown'.
}
```

In the above example, `response.json()` returns data of type `any` by default. This causes TypeScript to throw an error when we try to access the `name` property, as we haven't told TypeScript what the type of `data` is.

We can fix this by adding a type assertion:

```ts
// Type assertion
const data = await response.json() as { name: string };
// ^ data: { name: string }

console.log(data.name); // No error
```

By using a type assertion, we are telling TypeScript that `data` is an object with a `name` property of type `string`.

## Coercing to a different type

TypeScript will throw an error if you try to coerce a type to a completely different type:

```ts
const x = "hello" as number;
// ^ Error: Conversion of type 'string' to type 'number'
//   may be a mistake because neither type sufficiently
//   overlaps with the other. If this was intentional,
//   convert the expression to 'unknown' first.
```

In such a case, you will have to convert the type to `unknown` first:

```ts
const x = "hello" as unknown as number;
// ^ x: number
```

## Do not use type assertions unless necessary

Type assertions should be used sparingly, and ideally, not at all.

Using type assertions overrides TypeScript's type inference system entirely, which may cause us to leave out edge cases.

Let's take the previous example:

```ts
const data = await response.json() as { name: string };
```

In reality, the response from the server may return data that doesn't have a `name` property. In such a case, TypeScript will not throw an error, and the code will fail at runtime.

Instead, we want to handle such cases by checking the type of `data`, then perform the operation if the type is correct:

```ts
// Add a type guard to check if the data is valid
function isDataValid(data: unknown): data is { name: string } {
  return typeof data === "object" && "name" in data;
}

const data = await response.json();

if (isDataValid(data)) {
  console.log(data.name);
  // ^ data: { name: string };
} else {
  console.error("Invalid data");
}
```

In the above example, we used a function to check if the data is valid. Within the clause that is run when `isDataValid(data)` is true, TypeScript knows that `data` is of type `{ name: string }`.

We will learn more about type guards in the next chapter.