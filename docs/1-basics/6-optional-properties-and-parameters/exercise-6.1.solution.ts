// EXERCISE 6.1: Optional properties and parameters
// Add type annotations where necessary and modify the functions to handle optional parameters appropriately.

// 1. Refactor this function to use an optional parameter for 'title'
function greet(name: string, title?: string) {
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
// console.log(greet("Charlie", "Mr.", "Brown"));


// 2. Define a type for User
//    - name
//    - age (optional)
//    - email (optional)
//    - isAdmin
//    - address (optional)
type User = {
  name: string;
  age?: number | string;
  email?: string;
  isAdmin: boolean
  address?: Address;
};

// 3. Define type for Address
//    - street
//    - city
//    - country
type Address = {
  street: string;
  city: string;
  country: string;
};

// 4. Create a type for the configuration object with optional properties
type UserConfig = {
  name: string;
  age?: number;
  email?: string;
  isAdmin?: boolean;
}; // Your implementation here

// 5. Refactor the function to take in UserConfig and return User.
function createUser(config: UserConfig): User {
  return {
    name: config.name,
    age: config.age ?? "Unknown",
    email: config.email ?? "No email provided",
    isAdmin: config.isAdmin ?? false,
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
function getFullAddress(user: User) {
  const street = user.address?.street
      ?? "Unknown street";
  const city = user.address?.city ?? "Unknown city";
  const country =  user.address?.country ?? "Unknown country";

  return `${street}, ${city}, ${country}`;
}

// 7. Create a type for the product with optional properties
//   - name
//   - price
//   - description (optional)
//   - category (optional)
type Product = {
  name: string;
  price: number;
  description?: string;
  category?: string;
}; // Your implementation here

// Then, refactor the function to use this type and handle optional properties
function displayProductInfo(product: Product) {
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