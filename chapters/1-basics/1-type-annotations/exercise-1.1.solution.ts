// Exercise 1.1: Type annotations
// Add/correct type annotations to all the variable and functions below.

const age: number = 25;
const message: string = "Hello, world!";
const isTrue: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

function sayHello(name: string): string {
  return `Hello, ${name}!`;
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function getAge(): number {
  return 25;
}

// ignore the line below
export {};
