# Union and Literal Types

TypeScript provides powerful type system features that allow for more precise type definitions. Two such features are union types and literal types.

## Union Types

Union types allow you to specify that a value can be one of several types. This is particularly useful when a variable or parameter can accept multiple types of values.

To define a union type, use the `|` (pipe) symbol between the types:

`type StringOrNumber = string | number;`

You can use union types for variables, function parameters, and return types:

`function printId(id: number | string) {
  console.log("Your ID is: " + id);
}`

This function can accept either a number or a string as an argument:

`printId(101);  // Valid
printId("202");  // Also valid`

## Literal Types

Literal types allow you to specify exact values that a type can have. This is useful when you want to limit a variable to a specific set of values.

You can use literal types with primitives like strings, numbers, and booleans:

```ts
type Direction = "North" | "South" | "East" | "West";
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type BinaryOptions = 0 | 1 | true | false;
```

These types can only hold the specified values:

```ts
// Valid
let direction: Direction = "North"; 
// Error: Type '"Northeast"' is not assignable to type 'Direction'.`
direction = "Northeast"; 
```

## Literal unions

You can combine union and literal types to create powerful type definitions:

```ts
type Status = "pending" | "processing" | "completed" | number;
```

This type allows for specific string values or any number:

```ts
let status: Status = "pending";  // Valid
status = 404;  // Also valid
status = "cancelled";  // Error: Type '"cancelled"' is not assignable to type 'Status'.`
```

VSCode is smart enough that it provides autocompletion for the possible values of `direction` as well.

## Type Narrowing with Union Types

When working with union types, TypeScript uses control flow analysis to narrow down the type within conditional blocks:

```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}

padLeft("Hello", 5);  // Returns "     Hello"
padLeft("Hello", "World");  // Returns "WorldHello"
```

In this example, TypeScript knows that `padding` is a number in the first block and a string in the second.

### Another example

We have a function that moves an object in a specific direction:

```ts
function move(direction: 'left' | 'right' | 'up' | 'down') {
  if (direction === 'left') {
    // move left
  } else {
    // direction: 'right' | 'up' | 'down'
  }
}
```

### Switch statements

You can use switch statements with literal unions. TypeScript is smart to know whether or not you covered all cases:

```ts
function getAction(direction: 'left' | 'right' | 'up' | 'down'): Action {
  switch (direction) {
    case 'left':
      return action // calculate some action
    case 'right':
      return action
      break;
    case 'up':
      return action
      break;
    case 'down':
      return action
      break;
    // Note: No default case needed
    // Despite this, return type is Action rather than Action | undefined
    // because TypeScript knows that all cases are covered
  }
}
```

## Summary

- Union types allow you to combine multiple types into one
- Literal types allow you to specify the exact value that a variable can have
- Literal unions allow you to create an enum-like data type in TypeScript
