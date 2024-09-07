// Exercise 5.1: Variable types using "typeof"

const maxSpeed = 120;

// 1. Use typeof to create a type based on the maxSpeed variable
type SpeedLimit = ;// Your implementation here

function setSpeedLimit(limit: SpeedLimit) {
  console.log(`Speed limit set to ${limit} km/h`);
}

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  features: ["GPS", "Bluetooth", "Backup Camera"]
};

// 2. Use typeof to create a type based on the car object
type Car = ;// Your implementation here

function calculateArea(width: number, height: number): number {
  return width * height;
}

// 3. Use typeof to create a type based on the calculateArea function
type AreaCalculator = typeof calculateArea;

// 4. Create a new function that matches the AreaCalculator type
const calculateRectangleArea: AreaCalculator = (w, h) => {
  // Implementation
};

// ignore the line below
export {};