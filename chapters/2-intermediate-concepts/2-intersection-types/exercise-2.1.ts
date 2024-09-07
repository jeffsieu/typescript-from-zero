// Exercise 2.1: Intersection Types

// 1. Create two interfaces: 'Person' with properties 'name' and 'age',
//    and 'Employee' with properties 'jobTitle' and 'department'

// 2. Create an intersection type 'EmployeeDetails' that combines 'Person' and 'Employee'

// 3. Use the 'EmployeeDetails' type to annotate the following object
const employee = {
  name: "Alice Johnson",
  age: 32,
  jobTitle: "Software Engineer",
  department: "IT",
};

// 4. Create a function that takes an EmployeeDetails object and returns a string description
function describeEmployee(employee) {
  // Implementation
}

// 5. Create an interface 'Address' with properties 'street', 'city', and 'country'

// 6. Create a new intersection type 'EmployeeWithAddress' that includes EmployeeDetails and Address

// 7. Use the 'EmployeeWithAddress' type to annotate the following object
const employeeWithAddress = {
  name: "Bob Smith",
  age: 45,
  jobTitle: "Manager",
  department: "Sales",
  street: "123 Main St",
  city: "Anytown",
  country: "USA",
};

// ignore the line below
export {};
