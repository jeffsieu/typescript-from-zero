# Arrays, records and tuples

## Arrays

We can define arrays in TypeScript using the following equivalant syntax:

```ts
// Option 1: Bracket syntax
const numbers: number[] = [1, 2, 3, 4, 5];
const stringAndNumbers: (string | number)[] = ['Alice', 25, 'Bob', 30];

// Option 2: Array syntax
const numbers: Array<number> = [1, 2, 3, 4, 5];
const stringAndNumbers: Array<string | number> = ['Alice', 25, 'Bob', 30];
```

In the above example, `numbers` is an array of numbers, and `stringAndNumbers` is an array of strings and numbers.

## Records

Records represent a key-to-value mapping in JavaScript. Keys can a combination of strings, numbers and symbols. They have a key of a specific type, and a value of a specific type.

```ts
type User = {
  name: string;
};

// Syntax: Record<key, value>
// key can be either a number or a string
const numberIdToUserMapping: Record<number, User> = {
  1: { name: 'Alice' },
  2: { name: 'Bob' },
  3: { name: 'Charlie' },
};
const stringIdToUserMapping: Record<string, User> = {
  a4fd43: { name: 'Alice' },
  bcf94e: { name: 'Bob' },
  c3f4e2: { name: 'Charlie' },
};
```

### Example: Variants using Records

Records and string unions can form the following powerful construct:

```ts
import { CSSProperties } from 'react';

type ThemeMode = "dark" | "light";
type Styles = CSSProperties;

// 1. Create a mapping from ThemeMode to Styles
const themeStyles: Record<ThemeMode, Styles> = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

// 2. Use the mapping
const currentTheme: ThemeMode = 'dark';
const currentStyles = themeStyles[currentTheme]; // ok

// Throws an error if the key is invalid
console.log(themeStyles['invalid']); // Error: Property 'invalid' does not exist on type 'Record<ThemeMode, Styles>'
```

### Fun fact: Arrays are records

A fun fact is that an array is also a record. Because they are a key-to-value mapping where the key is a number, and the value is the element at that index.

```ts
const numbers: Record<number, number> = [1, 2, 3, 4, 5];
// ^ The above is valid

// However, you should not do this because now these are invalid:
numbers.length; // Error: Property 'length' does not exist on type 'Record<number, number>'
numbers.find(n => n === 2); // Error: Property 'find' does not exist on type 'Record<number, number>'
```

## Tuples

Tuples are arrays with a fixed number of elements, and each element can have a different type. They are defined using the following syntax:

```ts
const tuple: [string, number] = ['Alice', 25];
```

You can get TypeScript to infer the type of a tuple by using the `as const` syntax:

```ts
const tuple = ['Alice', 25] as const;
// ^ tuple: readonly ["Alice", 25]

const tupleNoConst = ['Alice', 25];
// ^ tupleNoConst: (string | number)[]
```

### Returning multiple values

Tuples can be used to return multiple values from a function:

```ts
function useState(): [number, (value: number) => void] {
  let state = 0;
  return [state, (value: number) => state = value];
}

const [state, setState] = useState();
```

However, if you have more than 2-3 values, it is recommended to use an object instead of a tuple.

This is as accessing tuples rely on the order of the elements, which can be confusing and error-prone.

```ts
// GOOD, NOT CONFUSING
function getUser(): { name: string, age: number, email: string } {
  return { name: 'Alice', age: 25, email: 'abc@email.com' };
}

const { name, age, email } = getUser();


// BAD, CONFUSING
function getUser(): [string, number, string] {
  return ['Alice', 25, 'abc@email.com'];
}

const [name, age, email] = getUser(); // Correct usage
const [email, age, name] = getUser(); // BAD: WRONG ORDER BUT NO ERROR
```
