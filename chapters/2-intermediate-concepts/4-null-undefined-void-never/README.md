# null, undefined, void and never

If you have been using JavaScript for a while, you would probably know that there are two special values that mean "nothing" in JavaScript: `null` and `undefined`.

Welcome to the world of TypeScript, where there are more values that mean "nothing"!

Introducing:

- `null`
- `undefined`
- `void`
- `never`

> Note: There is also `unknown` and `any`, but we will cover them in a separate section.


## Null vs undefined

Firstly, `null` and `undefined` have their own corresponding and separate types in TypeScript.

> Note: This only applies in strict mode. If you are not using strict mode, `null` and `undefined` are assignable to any type.

### When to use which?

"So, what even is the difference between `null` and `undefined` if they both mean 'nothing'?", you might ask.

Consider the following example, where it seems that `null` and `undefined` can be used interchangeably:

```ts
// User not selected yet

// Option 1:
const selectedUser: User | null = null;

// Option 2:
const selectedUser: User | undefined = undefined;
```

This question is a common one, and the generally accepted answer is that `null` and `undefined` are used in different contexts.

`null` is used when there is a defined value, and the value is "nothing".

`undefined` is used when something does not have a value yet.

This is illustrated in the following example:

```js
// JavaScript
const user = {
  firstName: 'Alice',
  middleName: null,
  age: 25,
  isStudent: true,
};

// Meaning: user does not even have an "email" field
console.log(user.email); // undefined;
// Meaning: user has a middle name field, but it is assigned to "nothing" (i.e. Alice has no middle name)
console.log(user.middleName); // null;

```

## void

Void is a special type in TypeScript that is used for functions with no return value.

This is similar to languages like Java where you have to specify the return type of a function.

```ts
function logMessage(message: string): void {
  console.log(message);
}

// This is equivalent to the above, as void is the inferred return type
// when a function does not return anything
function logMessage(message: string) {
  console.log(message);
}
```

### void is TypeScript-only

Note: void does not exist in JavaScript as a value at all. It only exists as a type value in TypeScript as a way to represent the return value of a function that does not return anything.

```ts
function logMessage(message: string) {
  console.log(message);
}

const value = logMessage('Hello, World!'); 
console.log(value); // undefined; value is not "void"

```

## never

`never` is also a special type that only exists in TypeScript. It is used to represent values that will never occur.

Consider the following example:

```ts
function move(direction: 'left' | 'right') {
  if (direction === 'left') {
    // Move left
  } else if (direction === 'right') {
    // Move right
  } else {
    // The type of "direction" here is never
  }
}
```

In the above example, the type of `direction` is `never` because the `if` and `else if` conditions cover all possible values of `direction`.

In other words, it represents a value that will *never* occur (i.e. the code will never execute at a clause where the type of a variable is `never`).

You will almost never have to use this type, so you may ignore this if it is too confusing to wrap your head around.
