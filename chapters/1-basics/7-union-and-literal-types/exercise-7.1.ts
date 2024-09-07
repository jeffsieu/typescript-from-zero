// EXERCISE 7.1: Union and literal types
// Use union types and literal types to improve the following code.
// Add type annotations where necessary.

// 1. Create a union type for different shapes
// Hint: Use "circle", "square", and "triangle" as literal types
type Shape = ;

// 2. Create a type for a point in 2D space
// The x and y coordinates should only allow -1, 0, or 1
type Point = ;

// 3. Create a union type for different HTTP methods
// Hint: Use "GET", "POST", "PUT", "DELETE" as literal types
type HttpMethod = ;

// 4. Create a type for API response status
// It should allow "success" and "error" as string literals, or a number for the status code
type ApiStatus = ;

// 5. Add type annotations to this function
// It should accept the Shape type you defined and return a number
function getArea(shape, size) {
  switch (shape) {
    case "circle":
      return Math.PI * size * size;
    case "square":
      return size * size;
    case "triangle":
      return (Math.sqrt(3) / 4) * size * size;
  }
}

// 6. Add type annotations to this function
// It should accept the Point type you defined and return a string
function describePoint(point) {
  return `(${point.x}, ${point.y})`;
}

// 7. Add type annotations to this function
// It should accept the HttpMethod type you defined and a URL string
// The return type should be a union of 'string' and 'undefined'
function makeRequest(method, url) {
  // Implementation not required
}

// 8. Create a type for a configuration object
// It should have a mode property that only allows "development" or "production"
// and an optional debug property that's a boolean
type Config = ;

// 9. Add type annotations to this function
// It should accept the Config type you defined
function setConfig(config) {
  // Implementation not required
}

// 10. Create a literal type for valid status values
// Then, refactor the function to use this type
function updateStatus(status) {
  if (status === "active" || status === "inactive" || status === "suspended") {
    // Update the status
  } else {
    throw new Error("Invalid status");
  }
}

updateStatus("active");
updateStatus("inactive");

// 11. Create a union type for possible log levels
// Then, refactor the function to use this type and add type annotations
function log(message, level) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

log("Server started", "INFO");
log("Database connection failed", "ERROR");

// Ignore this line
export {};