// Exercise 3.1: Exclude types using "Omit" and "Exclude"

type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  lastLogin: Date;
  status: Status;
}

// 1. Use 'Omit' to create a new type 'PublicUser' that excludes the 'password' property
type PublicUser = Omit<User, 'password'>

// 2. Create a function that takes a User and returns a PublicUser
function makePublic(user: User): PublicUser {
  // Implementation (optional)
  return user;
}

// 3. Create a union type 'Status' with values: 'pending', 'active', 'inactive', 'banned'
type Status = 'pending' | 'active' | 'inactive' | 'banned'

// 4. Add a 'status' property to the User type using the Status type
// 5. Use 'Exclude' to create a new type 'PositiveStatus' that excludes 'inactive' and 'banned'
type PositiveStatus = Exclude<Status, 'inactive' | 'banned'>

// 6. Create a function that only accepts PositiveStatus as an argument
function updateUserStatusPositively(status: PositiveStatus) {
  // Implementation
}

// ignore the line below
export {};