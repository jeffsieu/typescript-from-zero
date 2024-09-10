// Exercise 2.1: Intersection Types

// 1. Create two interfaces: 'Person' with properties 'name' and 'age',
//    and 'Employee' with properties 'jobTitle' and 'department'
type Person = {
  name: string;
  age: number;
};

type Employee = {
  jobTitle: string;
  department: string;
};

// 2. Create an intersection type 'EmployeeDetails' that combines 'Person' and 'Employee'
type EmployeeDetails = Person & Employee;

// 3. Use the 'EmployeeDetails' type to annotate the following object
const employee: EmployeeDetails = {
  name: "Alice Johnson",
  age: 32,
  jobTitle: "Software Engineer",
  department: "IT",
};

// 4. Create a function that takes an EmployeeDetails object and returns a string description
function describeEmployee(employee: EmployeeDetails): string {
  // Implementation
  return "";
}

// 5. Create an interface 'Address' with properties 'street', 'city', and 'country'
type Address = {
  street: string;
  city: string;
  country: string;
};

// 6. Create a new intersection type 'EmployeeWithAddress' that includes EmployeeDetails and Address
type EmployeeWithAddress = EmployeeDetails & Address;

// 7. Use the 'EmployeeWithAddress' type to annotate the following object
const employeeWithAddress: EmployeeWithAddress = {
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
