# Type aliases

Sometimes, you have to reuse a type elsewhere in your code. Instead of repeating the type definition, you can use a type alias.

```ts
// You may alias a primitive type
type Name = string
// And even alias an alias
type FullName = Name;
// Aliases are useful to define complex types
type SuperLongType = string | number | boolean | null | undefined;
// ^ Union types are covered in a later chapter

const fullName: FullName = 'Alice Smith';

function printName(name: Name) {
  console.log(`Name: ${name}`);
}
```

## Type aliases vs variable declarations

Type aliases are similar to JavaScript variable declarations in many ways:

- They are used to store values for later use
  - Type aliases store types for later use
  - JavaScript variables store values for later use

You can think of type aliases as "variables for types".
