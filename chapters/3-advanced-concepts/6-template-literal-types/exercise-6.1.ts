// EXERCISE 5.1: Define a template literal type for API routes.

// Create a template literal type for an API route that follows this pattern:
// '/api/<entity>/<id>'

// Entity can be one of the following: 'users', 'products', 'orders'
type Entity = // Your implementation here

// Id should be a number
type Id = // Your implementation here

// Define a template literal type 'ApiRoute' that represents a valid API route.
type ApiRoute = // Your implementation here

// Test the ApiRoute type by assigning valid and invalid routes
const validRoute: ApiRoute = "/api/users/123"; // Should be valid
const invalidRoute: ApiRoute = "/api/user/123"; // Should error, because 'user' is not a valid Entity

// ignore the line below
export {};
