# Exclude types using `Omit` and `Exclude`

You can exclude types from existing types using `Omit` and `Exclude`.

## Omit

The `Omit` utility type creates a new type by copying an existing type but leaving out specific keys.

Syntax: `Omit<Type, Keys>`

Example:

```ts
type Person = {
  name: string;
  age: number;
  address: string;
}

type PersonWithoutAddress = Omit<Person, 'address'>;
// PersonWithoutAddress: { name: string; age: number; }
```

`Omit` is particularly useful when you want to create a new type based on an existing one, but without certain properties.

## Exclude

The `Exclude` utility type creates a new type by excluding from `Type` all union members that are assignable to `ExcludedUnion`.

Syntax: `Exclude<Type, ExcludedUnion>`

Example:

```ts
type Direction = "top" | "right" | "bottom" | "left";
type SidewaysDirection = Exclude<Direction, "top" | "bottom">;
// SidewaysDirection: "right" | "left"
```

`Exclude` is helpful when working with union types and you want to remove certain types from the union.
