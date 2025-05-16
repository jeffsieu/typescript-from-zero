# Variable keys using `keyof`

We can get the keys of a type using `keyof`. This is useful for getting valid keys of objects and arrays.

```ts
type AppStyleConfig = {
  light: {
    backgroundColor: string;
  };
  dark: {
    backgroundColor: string;
  };
}

type Theme = keyof AppStyleConfig; // "light" | "dark"
```

## Deriving value types of arrays/objects

Now that we have the keys of a type, we can also get the type of the values of an array/object by indexing it with its key.

```ts
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];
type User = typeof users[number]; // { name: string, age: number }
```

In the above example, we are accessing

## Keys of const variables

We can combine `keyof` and `typeof` to get the keys of constant variables.

```ts
// Define handlers for each url and HTTP method type
const routeHandlers = {
  '/api/users': {
    'GET': getUsers,
  } 
  '/api/users/:id': {
    'GET': getUserById,
  },
} as const
// ^ Define route handlers as a const variable

type RouteUrl = keyof typeof routeHandlers;
// RouteUrl: "/api/users" | "/api/users/:id"
```
