// Exercise 2.1: Inferred types
// Identify and remove unnecessary type annotations

// Note: TypeScript should not be complaining (no red squiggles) after
// your changes

function add(a: number, b: number): number {
  return a + b;
}

function canBuy(itemPrice: number, balance: number): boolean {
  const hasEnoughMoney: boolean = balance >= itemPrice;
  return hasEnoughMoney;
}

function getFullName(firstName: string, lastName: string): string {
  const fullName: string = `${firstName} ${lastName}`;
  return fullName;
}

// ignore the line below
export {};
