# Declaration merging

Declaration merging allows you to combine multiple declarations with the same name into a single definition. This is particularly useful for extending existing types, interfaces, and modules without modifying their original definitions.

## Merging interfaces

Interfaces with the same name are automatically merged:

```ts
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

// Resulting Box interface:
// interface Box {
//   height: number;
//   width: number;
//   scale: number;
// }
```

## Module augmentation

You can extend existing modules by using declaration merging:

```ts
// Existing module
declare module "myModule" {
  export function someFunction(): void;
}

// Augmentation
declare module "myModule" {
  export function newFunction(): void;
}
```

Module augmentation allows us to add type definitions for new functions, classes, or variables added to an existing module/npm package.

This is common with third-party libraries where we might have a custom configurations from which type definitions should be generated.

Examples:

- [Adding custom theme variables to Material UI library](https://mui.com/material-ui/customization/theming/#typescript)
- [Adding route config to TanStack Router for type-safe routing](https://tanstack.com/router/latest/docs/framework/react/quick-start#srcmaintsx)

## Global augmentation

You can add declarations to the global scope from within a module:

```ts
// In a module file
declare global {
  interface Array<T> {
    customMethod(): T;
  }
}
```

Declaration merging is a powerful tool for extending and modifying types in TypeScript, allowing for greater flexibility and expressiveness in your type definitions.
