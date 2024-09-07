// EXERCISE 9.1: Implement a discriminated union for different types of
// users in a system, then create functions to process these users.

// TODO: Create a discriminated union type 'User' that represents three types of users:
// 1. 'Admin' with properties: id (number), username (string), accessLevel (number)
// 2. 'Editor' with properties: id (number), username (string), department (string)
// 3. 'Viewer' with properties: id (number), username (string)
// Use a 'role' property as the discriminant

type User = // Your implementation here

// TODO: Implement a function 'getUserPermissions' that takes a User and returns
// a string describing their permissions:
// - For Admin: "Full access"
// - For Editor: "Can edit content in {department}"
// - For Viewer: "Read-only access"

function getUserPermissions(user: User): string {
  // Your implementation here
}

// Test your implementation
const viewer: User = { role: "Viewer", id: 1, username: "john_doe" };
const editor: User = { role: "Editor", id: 2, username: "jane_smith", department: "Marketing" };
const admin: User = { role: "Admin", id: 3, username: "admin_user", accessLevel: 2 };

console.log(getUserPermissions(viewer));
console.log(getUserPermissions(editor));
console.log(getUserPermissions(admin));

// ignore the line below
export {};