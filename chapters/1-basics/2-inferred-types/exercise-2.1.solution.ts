// Exercise 2.1: Inferred types
// Identify and remove unnecessary type annotations

// Note: Typescript should not be complaining (no red squiggles) after
// your changes

function add(a: number, b: number) {
  return a + b;
}

function canBuy(itemPrice: number, balance: number) {
  const hasEnoughMoney = balance >= itemPrice;
  return hasEnoughMoney;
}

function getFullName(firstName: string, lastName: string) {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}

// ignore the line below
export {};
