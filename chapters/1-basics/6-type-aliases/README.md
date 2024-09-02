# Type aliases

Sometimes, you have to reuse a type elsewhere in your code. Instead of repeating the type definition, you can use a type alias.

```ts
type Direction = 'left' | 'right' | 'up' | 'down';

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

let currentDirection: Direction = 'left';

// Do other stuff
```

In the above example, `Direction` is a type alias for the union type `'left' | 'right' | 'up' | 'down'`.

You may define aliases for *any* type, not just literal unions:

```ts
// You may alias a primitive type
type Name = string
// And even alias an alias
type FullName = Name;
// Aliases are useful to define complex types
type SuperLongType = string | number | boolean | null | undefined;


const fullName: FullName = 'Alice Smith';

function printName(name: Name) {
  console.log(`Name: ${name}`);
}
```

## Type aliases vs variable declarations

Type aliases are similar to Javascript variable declarations in many ways:

- They are used to store values for later use
  - Type aliases store types for later use
  - Javascript variables store values for later use

You can think of type aliases as "variables for types".
