// Exercise 6.1: Variable keys using "keyof"

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

// 1. Use keyof to create a type representing all keys of User
type UserKey = keyof User;

// 2. Annotate getUserProperty with appropriate types
function getUserProperty(user: User, key: UserKey) {
  return user[key];
}

const user: User = {
  id: 0, name: '', email: '', age: 25,
}

const id = getUserProperty(user, 'id') ;
//    ^?

// Object representing API endpoints
const apiEndpoints = {
  getUsers: "/api/users",
  getUser: "/api/users/:id",
  createUser: "/api/users",
  updateUser: "/api/users/:id",
  deleteUser: "/api/users/:id",
} as const;

// 3. Use keyof to create a type representing all keys of apiEndpoints
type ApiEndpoint = keyof typeof apiEndpoints;

// 4. Create a function that takes an ApiEndpoint and returns the corresponding URL
function getApiUrl(endpoint: ApiEndpoint) {
  return apiEndpoints[endpoint];
}

const apiUrl = getApiUrl('getUser');
//    ^?

// ignore the line below
export {};