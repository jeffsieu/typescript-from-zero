// Exercise 5.1: Object types and interfaces

// Create an interface/type Animal with properties name (string) and sound (string).
type Animal = {
  name: string;
  sound: string;
}

// Create an interface/type Dog that extends Animal and adds a property breed (string).
type Dog = Animal & {
  breed: string;
}

// Create a variable myDog of type Dog and assign it an object with appropriate values.
const myDog: Dog = {
  name: 'dog',
  sound: 'bark',
  breed: 'chihuahua'
}

// ignore the line below
export {}