# Distributive Conditional Types

When conditional types act on a generic type, they become distributive when given a union type.

For example, take the following:

```ts
type ToArray<T> = T extends any ? T[] : never;
```

If we apply a union type to the generic type, TypeScript will apply the conditional type on each of the members of the union.

```ts
type StringOrNumber = string | number ;
type StringArrayOrNumberArray = ToArray<StringOrNumber>;
// ^ string[] | number[];
```

This is in contrast to the non-distributive behaviour if we had not used conditional types. The generic type would act on the union type as a whole.

```ts
type MyArray<T> = T[]
type StringOrNumberArray = MyArray<StringOrNumber>;
// ^ (string | number)[]
```

## Preventing Distribution

To prevent distribution, you can wrap the checked type in square brackets:

```ts
type ToArrayNonDistributive<T> = [T] extends [any] ? T[] : never;
type StringOrNumberArray = ToArrayNonDistributive<StringOrNumber>;
// ^ (string | number)[]
```

### Interesting use case: Testing for `never`

We might think that the following helper type can test for never:

```ts
// Wrong implementation
type IsNever<T> = T extends never ? true : false;

// Correct
type ShouldBeFalse = IsNever<string>;
// ^ ShouldBeFalse: false

// Wrong
type ShouldBeTrue = IsNever<never>;
// ^ ShouldBeTrue: never
```

This is interesting. For some reason, `IsNever<never>` returns `never` instead of `true`.

This is due to the distributive behaviour of conditional types:

- TypeScript takes each type in the union `never` and applies the conditional type to it.
- Since `never` is an empty union, there are no types to apply the conditional type to.
- The result is `never`.

Side track: We can verify that `never` is indeed an empty union, by unioning it with another type:

```ts
type AOrNever = 'a' | never;
// ^ AOrNever: 'a'

```

## Use Cases

Distributive conditional types are particularly useful for:

1. Transforming union types
2. Filtering union types
3. Implementing complex type manipulations

For example, you can use them to extract certain types from a union:

```ts
type ExtractString<T> = T extends string ? T : never;
type StringOnly = ExtractString<'A' | 'B' | 2 | false>;
// ^ StringOnly: 'A'
```
