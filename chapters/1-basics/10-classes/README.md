# Classes

Classes are a way to implement object-oriented programming in Javascript. They are automatically a type in TypeScript.

```ts
class User {
  constructor(public name: string, public age: number) {}
}

const user = new User("Alice", 25);
// ^ user: User
```

You may use `instanceof` to check if an object is an instance of a class:

```ts

function printDate(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.toISOString());
    // ^ date: Date
    return;
  }

  console.log(new Date(date).toISOString());
}
```