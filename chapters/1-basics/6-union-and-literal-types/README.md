# Union and literal types

Sometimes, it is not enough to use the built-in primitive types like `string` and `number` by themselves.

Consider the following code which converts either a string or number to a number:

```js
// Javascript
function toNumber(value) {
  if (typeof value === 'number') {
    return value;
  }

  return parseInt(value);
}
```

This will look like the following in Typescript:

```ts
function toNumber(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  return parseInt(value);
}
```

## Union types

You can "combine" types in TypeScript by separating two or more types with a `|`. This is similar to the "OR" operator in Javascript, which is `||`.

In the above example, `value` can be either a `string` or a `number`.

Here are more examples of union types:

```ts
const date: string | Date = new Date();
const result: number | string = 25;
```

## Literal types

Typescript also allows you to specify the exact value that a variable can have. This is called a literal type.

Here is an example:

```ts
const direction: 'left' | 'right' | 'up' | 'down' = 'left';
```

In the above example, `direction` can only be one of the four strings: `'left'`, `'right'`, `'up'`, or `'down'`.

More hypothetical examples:
  
```ts
const pi: 3.14 = 3.14;
const isTrue: true = true;
const isFalse: false = false;
const name: 'Alice' = 'Alice';
```

## Literal unions

The union  of literal types allows you to create an "[enum](https://en.wikipedia.org/wiki/Enumerated_type)"-like data type in Typescript.

Here is an example:

```ts
function move(direction: 'left' | 'right' | 'up' | 'down') {
  // move the player
}

move("left"); // works
move(100); // throws an error
move("home") // throws an error even though "home" is a string
```

VSCode is smart enough that it provides autocompletion for the possible values of `direction` as well.

## Smart inference

TypeScript is smart enough to infer the possible types of a variable based on the context.

For example:

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
    // Return type is Action rather than Action | undefined
  }
}
```

## Summary

- Union types allow you to combine multiple types into one
- Literal types allow you to specify the exact value that a variable can have
- Literal unions allow you to create an enum-like data type in Typescript
