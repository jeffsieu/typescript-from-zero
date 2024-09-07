// Exercise 3.1: Exclude types using "Omit" and "Exclude"

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  lastLogin: Date;
}

// 1. Use 'Omit' to create a new type 'PublicUser' that excludes the 'password' property
type PublicUser = // Your implementation here

// 2. Create a function that takes a User and returns a PublicUser
function getPublicUser(user) {
  // Implementation (optional)
}

// 3. Create a union type 'Status' with values: 'pending', 'active', 'inactive', 'banned'
type Status = // Your implementation here

// 4. Add a 'status' property to the User type using the Status type
// 5. Use 'Exclude' to create a new type 'PositiveStatus' that excludes 'inactive' and 'banned'

// 6. Create a function that only accepts PositiveStatus as an argument
function updateUserStatusPositively(status) {
  // Implementation
}

// ignore the line below
export {};