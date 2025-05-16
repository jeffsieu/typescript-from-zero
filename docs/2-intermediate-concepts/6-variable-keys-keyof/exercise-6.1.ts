// Exercise 6.1: Variable keys using "keyof"

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 1. Use keyof to create a type representing all keys of User
type UserKey = ; // Your implementation here

// 2. Annotate getUserProperty with appropriate types
function getUserProperty(user, key) {
  return user[key];
}

// Object representing API endpoints
const apiEndpoints = {
  getUsers: "/api/users",
  getUser: "/api/users/:id",
  createUser: "/api/users",
  updateUser: "/api/users/:id",
  deleteUser: "/api/users/:id",
};

// 3. Use keyof to create a type representing all keys of apiEndpoints
type ApiEndpoint = ; // Your implementation here

// 4. Create a function that takes an ApiEndpoint and returns the corresponding URL
function getApiUrl(endpoint) {
  return apiEndpoints[endpoint];
}

// ignore the line below
export {};