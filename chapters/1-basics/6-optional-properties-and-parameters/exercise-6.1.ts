// EXERCISE 6.1: Optional properties and parameters
// Add type annotations where necessary and modify the functions to handle optional parameters appropriately.

// 1. Refactor this function to use an optional parameter for 'title'
function greet(name, title) {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

// TESTS
// Should work:
console.log(greet("Alice", "Ms."));
console.log(greet("Bob"));

// Should not work:
console.log(greet("Charlie", "Mr.", "Brown"));


// 2. Define a type for User
//    - name
//    - age (optional)
//    - email (optional)
//    - isAdmin
//    - address (optional)
type User = ; // Your implementation here

// 3. Define type for Address
//    - street
//    - city
//    - country
type Address = ; // Your implementation here

// 4. Create a type for the configuration object with optional properties
type UserConfig = ; // Your implementation here

// 5. Refactor the function to take in UserConfig and return User.
function createUser(config) {
  return {
    name: config.name,
    age: config.age ?? "Unknown",
    email: config.email ?? "No email provided",
    isAdmin: config.isAdmin,
  };
}

// TESTS
// Should work:
const user1 = createUser({
  name: "Charlie",
  age: 30,
  email: "charlie@example.com",
});
const user2 = createUser({ name: "David", isAdmin: true });

// 6. Add appriopriate type annotations
// Then, refactor this function to use optional chaining and nullish coalescing
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

// 7. Create a type for the product with optional properties
//   - name
//   - price
//   - description (optional)
//   - category (optional)
type Product = ; // Your implementation here

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

// TESTS
// Should work:
const product1 = {
  name: "Laptop",
  price: 999.99,
  description: "Powerful laptop for professionals",
};
const product2 = { name: "Mouse", price: 19.99 };
console.log(displayProductInfo(product1));
console.log(displayProductInfo(product2));

// ignore the line below
export {}