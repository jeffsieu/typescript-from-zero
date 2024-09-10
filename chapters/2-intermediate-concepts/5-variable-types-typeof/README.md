# Variable types using `typeof`

You can extract the type of a variable using `typeof`.

```ts
const x = 10;

type X = typeof x; // 10 
```

It isn't very useful on its own, but it can be combined with other operators to express more patterns.

## Getting the return type of a function

```ts
function foo() {
  return { x: 10, y: 20 };
}

type FooResult = ReturnType<typeof foo>;
const mockFooResult: FooResult = {
  x: 10,
  y: 20,
};
```

## Getting the parameters of a function

```ts
function bar(x: number, y: number) {
  return x + y;
}

type BarParams = Parameters<typeof bar>;
const mockBarParams: BarParams = [10, 20];
```
