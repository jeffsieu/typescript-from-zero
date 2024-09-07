# Conditional types

Conditional types are a powerful feature in TypeScript that allow you to make type decisions based on conditions. This can help you create more flexible and reusable types.

They allow you to make type decisions based on conditions. The syntax is as follows:

```ts
type ConditionalType<T> = T extends U ? X : Y
```

This means "if T is assignable to U, then the type is X, otherwise the type is Y".

## Types based on other types

Consider the following function.

```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
 
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
```

We have to create one function signature for each case of the type of input. This can be cumbersome and error-prone.

Instead, we can use conditional types to create a single function signature that can handle both cases.

```ts
type IdLabel = { id: number };
type NameLabel = { name: string };

type Label<T> = T extends string ? NameLabel : IdLabel;

function createLabel<T extends string | number>(nameOrId: T): Label<T> {
  throw "unimplemented";
}

const a = createLabel("typescript");
// ^ a: NameLabel
 
const b = createLabel(2.8);
// ^ b: IdLabel
 
const c = createLabel(Math.random() ? "hello" : 42);
// ^ c: NameLabel | IdLabel
```

## Excluding types

You can exclude the output of a conditional type by using the `never` type. This can be useful when you want to filter out certain types from a union.

```ts
type ExcludeNullish<T> = T extends null | undefined ? never : T;

type NonNullableString = ExcludeNullish<string | null | undefined>; // string
```
