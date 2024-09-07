// EXERCISE 1.2: Refactor the following JavaScript code to use TypeScript with optional types and parameters.
// Add type annotations where necessary and modify the functions to handle optional parameters appropriately.

// 1. Refactor this function to use an optional parameter for 'title'
function greet(name, title) {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

// 2. Create a type for the configuration object with optional properties
// Then, refactor the function to use this type
function createUser(config) {
  return {
    name: config.name,
    age: config.age ?? "Unknown",
    email: config.email ?? "No email provided",
    isAdmin: config.isAdmin ?? false,
  };
}

// 3. Refactor this function to use optional chaining and nullish coalescing
function getFullAddress(user) {
  const street =
    user.address && user.address.street
      ? user.address.street
      : "Unknown street";
  const city =
    user.address && user.address.city ? user.address.city : "Unknown city";
  const country =
    user.address && user.address.country
      ? user.address.country
      : "Unknown country";

  return `${street}, ${city}, ${country}`;
}

// 4. Create a type for the product with optional properties
// Then, refactor the function to use this type and handle optional properties
function displayProductInfo(product) {
  let info = `${product.name} - $${product.price}`;

  if (product.description) {
    info += `\nDescription: ${product.description}`;
  }

  if (product.category) {
    info += `\nCategory: ${product.category}`;
  }

  return info;
}

// Test your refactored functions here
console.log(greet("Alice", "Ms."));
console.log(greet("Bob"));

const user1 = createUser({
  name: "Charlie",
  age: 30,
  email: "charlie@example.com",
});
const user2 = createUser({ name: "David", isAdmin: true });

console.log(
  getFullAddress({ address: { street: "123 Main St", city: "Anytown" } })
);
console.log(getFullAddress({ address: {} }));

const product1 = {
  name: "Laptop",
  price: 999.99,
  description: "Powerful laptop for professionals",
};
const product2 = { name: "Mouse", price: 19.99 };
console.log(displayProductInfo(product1));
console.log(displayProductInfo(product2));
