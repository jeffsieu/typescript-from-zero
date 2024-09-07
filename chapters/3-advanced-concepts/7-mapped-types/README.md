# Mapped types

Mapped types allow you to create new types based on existing ones. They provide a way to transform the properties of an existing type in a systematic way, creating a new type with modified property types, names, or modifiers.

A mapped type looks like this:

```ts
type MappedType<T> = {
  [P in keyof T]: T[P];
};
```

Here, `P in keyof T` iterates over each property `P` in type `T`.

## Transforming property types

You can transform property types:

```ts
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type User = { name: string; age: number };
type NullableUser = Nullable<User>;
// Equivalent to: { name: string | null; age: number | null; }
```

## Modifying property modifiers

You can add or remove `readonly` and optional modifiers. Removing modifiers can be done using `-`:

```ts
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

## Key remapping

You can remap property keys using the `as` keyword. We can use `Capitalize<T>`, `Lowercase<T>`, and `Uppercase<T>` helper generics to manipulate the keys.

> Note: This is similar to the syntax for type assertions using "as". But it is not the same concept.

```ts
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type Person = { name: string; age: number };
type PersonGetters = Getters<Person>;
// Equivalent to: { getName: () => string; getAge: () => number; }
```

Another example:

```ts
type ChangeHandler<State extends Record<string, unknown>> = {
  [K in (keyof State & string) as `on${Capitalize<K>}Change`]?: (value: State[K]) => void;
};

type State = {
  selectedName: string;
  pageNo: number;
}

type StateChangeHandler = ChangeHandler<State>;
// ^ StateChangeHandler: {
//     onSelectedNameChange: (value: User) => void;
//     onPageNoChange: (value: number) => void;
//}
```

Mapped types are extremely useful for creating reusable type transformations, reducing code duplication, and enabling more flexible and powerful type manipulations in TypeScript.

## Filtering out object keys

You can filter out keys by producing never via a conditional type:

```ts
// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
// ^ KindlessCircle: {
//     radius: number;
//   }
```

## Mapping over any union

You can map over arbitrary unions, not just unions of `string | number | symbol`, but unions of any type.

Here, we are mapping over a union of event types and creating a configuration object that maps each event type to a handler function:

```ts
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>
// ^ Config: {
//     square: (event: SquareEvent) => void;
//     circle: (event: CircleEvent) => void;
// }
```
