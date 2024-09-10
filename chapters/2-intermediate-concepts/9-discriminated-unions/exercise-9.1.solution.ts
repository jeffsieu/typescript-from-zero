// EXERCISE 9.1: Discriminated unions
// Implement a discriminated union for different types of
// users in a system, then create functions to process these users.

// TODO: Create a discriminated union type 'User' that represents three types of users:
// 1. 'Admin' with properties: id (number), username (string), accessLevel (number)
// 2. 'Editor' with properties: id (number), username (string), department (string)
// 3. 'Viewer' with properties: id (number), username (string)
// Use a 'role' property as the discriminant

type BaseUser = {
  id: number;
  username: string;
};

type Admin = BaseUser & {
  role: "admin";
  accessLevel: number;
};

type Editor = BaseUser & {
  role: "editor";
  department: string;
};

type Viewer = BaseUser & {
  role: "viewer";
};

type User = Admin | Editor | Viewer;

// TODO: Implement a function 'getUserPermissions' that takes a User and returns
// a string describing their permissions:
// - For Admin: "Full access"
// - For Editor: "Can edit content in {department}"
// - For Viewer: "Read-only access"

function getUserPermissions(user: User) {
  switch (user.role) {
    case "admin":
      return "Full access";
    case "editor":
      return `Can edit content in ${user.department}`;
    case "viewer":
      return "Read-only access";
  }
}

// Test your implementation
const viewer: User = { role: "viewer", id: 1, username: "john_doe" };
const editor: User = {
  role: "editor",
  id: 2,
  username: "jane_smith",
  department: "Marketing",
};
const admin: User = {
  role: "admin",
  id: 3,
  username: "admin_user",
  accessLevel: 2,
};

console.log(getUserPermissions(viewer));
console.log(getUserPermissions(editor));
console.log(getUserPermissions(admin));

// ignore the line below
export {};
