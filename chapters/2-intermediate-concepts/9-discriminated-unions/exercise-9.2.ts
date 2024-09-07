// EXERCISE 9.2: Discriminated unions
// Model a task management system using discriminated unions,
// then implement functions to process tasks.

// TODO: Create a discriminated union type 'Task' with the following subtypes:
// 1. 'Bug': id (number), title (string), severity ('low' | 'medium' | 'high')
// 2. 'Feature': id (number), title (string), priority (number)
// 3. 'Improvement': id (number), title (string), estimatedTime (number)
// Use a 'type' property as the discriminant

type Task = ;// Your implementation here

// TODO: Implement a function 'summarizeTask' that takes a Task and returns
// a string summary:
// - For Bug: "{title} (Bug - {severity} severity)"
// - For Feature: "{title} (Feature - priority {priority})"
// - For Improvement: "{title} (Improvement - est. {estimatedTime} hours)"

function summarizeTask(task: Task): string {
  // Your implementation here
}

// Test your implementation
const tasks: Task[] = [
  { type: "Bug", id: 1, title: "Fix login issue", severity: "high" },
  { type: "Feature", id: 2, title: "Add dark mode", priority: 2 },
  { type: "Improvement", id: 3, title: "Refactor API client", estimatedTime: 5 },
  { type: "Bug", id: 4, title: "Fix typo on homepage", severity: "low" },
];

tasks.forEach(task => console.log(summarizeTask(task)));
console.log(`Estimated completion time: ${estimateCompletion(tasks)} hours`);

// ignore the line below
export {};