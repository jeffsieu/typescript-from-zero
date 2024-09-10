// EXERCISE 3.1: Generic types
// Refactor the following code to use generics
// This function fetches data from different API endpoints. Currently, it uses `any`, which removes type safety.

async function fetchProductData() {
  const response = await fetch('/api/products');
  const products = await response.json();
  return products;
}

async function fetchOrderData() {
  const response = await fetch('/api/orders');
  const orders = await response.json();
  return orders;
}

// Refactor this to a generic function so that it works with any type of data.
// Example API responses:
// - Products: [{ id: 1, name: "Laptop" }]
// - Orders: [{ orderId: 123, total: 99.99 }]

// Ignore the line below
export {};