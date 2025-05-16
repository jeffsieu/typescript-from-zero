// EXERCISE 3.1: Generic types
// Refactor the following code to use generics
// This function fetches data from different API endpoints. Currently, it uses `any`, which removes type safety.
async function fetchData<T>(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data as T;
}

type Product = {
  id: number;
  name: string;
};

type Order = {
  orderId: number;
  total: number;
};

async function fetchProductData() {
  return fetchData<Product[]>("/api/products");
}

async function fetchOrderData() {
  return fetchData<Order[]>("/api/orders");
}

// Refactor this to a generic function so that it works with any type of data.
// Example API responses:
// - Products: [{ id: 1, name: "Laptop" }]
// - Orders: [{ orderId: 123, total: 99.99 }]

/// ADDITIONAL CONTENT FROM LESSON BELOW

function getProperty<
  Obj extends Record<string, unknown>,
  Property extends keyof Obj
>(obj: Obj, property: Property) {
  return obj[property];
}

//Valid
const name = getProperty({ name: "John", age: 20 } as const, "name");
//    ^?
const age = getProperty({ name: "John", age: 20 }, "age");
//    ^?

// Invalid
const invalid = getProperty({ name: "John", age: 20, address: "" }, "address");

// Ignore the line below
export {};
