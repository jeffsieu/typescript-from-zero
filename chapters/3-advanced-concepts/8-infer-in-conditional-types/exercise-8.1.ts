// EXERCISE 1.1: Implement utility types using infer in conditional types

// TODO: Implement a 'Parameters' type that extracts the parameter types of a function type as a tuple
// Example: Parameters<(a: number, b: string) => void> should be [number, string]

type Parameters<T extends (...args: any) => any> = // Your implementation here

// TODO: Implement an 'InstanceType' type that extracts the instance type of a constructor function type
// Example: InstanceType<typeof Date> should be Date

type InstanceType<T extends new (...args: any) => any> = // Your implementation here

// TODO: Implement a 'FirstArgument' type that extracts the type of the first argument of a function
// If the function has no arguments, it should be never
// Example: FirstArgument<(a: number, b: string) => void> should be number

type FirstArgument<T extends (...args: any) => any> = // Your implementation here

// TODO: Implement a 'LastInArray' type that extracts the type of the last element in a tuple type
// If the tuple is empty, it should be never
// Example: LastInArray<[number, string, boolean]> should be boolean

type LastInArray<T extends any[]> = // Your implementation here

// Test your implementations
type ParamsTest = Parameters<(a: number, b: string, c: boolean) => void>;
type InstanceTypeTest = InstanceType<typeof Date>;
type FirstArgTest = FirstArgument<(x: string, y: number) => void>;
type LastInArrayTest = LastInArray<[number, string, boolean]>;

// Verify your implementations
const paramsTest: ParamsTest = [1, "hello", true];
const instanceTypeTest: InstanceTypeTest = new Date();
const firstArgTest: FirstArgTest = "hello";
const lastInArrayTest: LastInArrayTest = true;

// These should cause type errors:
// const paramsTestError: ParamsTest = [1, "hello"];
// const instanceTypeTestError: InstanceTypeTest = "not a date";
// const firstArgTestError: FirstArgTest = 42;
// const lastInArrayTestError: LastInArrayTest = "not boolean";

// ignore the line below
export {};