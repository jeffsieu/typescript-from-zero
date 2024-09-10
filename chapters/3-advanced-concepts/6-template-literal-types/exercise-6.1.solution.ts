// EXERCISE 6.1: Template literal types
// Define a template literal type for API routes.

// Create a template literal type for an API route that follows this pattern:
// '/api/<entity>/<id>'

// Entity can be one of the following: 'users', 'products', 'orders'
type Entity = "users" | "products" | "orders";

// Id should be a number
type Id = number;

// Define a template literal type 'ApiRoute' that represents a valid API route.
type ApiRoute = `/api/${Entity}/${Id}`;

// Test the ApiRoute type by assigning valid and invalid routes
const validRoute: ApiRoute = "/api/users/123"; // Should be valid
// const invalidRoute: ApiRoute = "/api/user/123"; // Should error, because 'user' is not a valid Entity

// ADDITIONAL CONTENT FROM LESSON BELOW
type User = {
  kind: "user";
};

type Product = {
  kind: "product";
};

type Order = {
  kind: "order";
};

type Shop = {
  kind: "shop";
};

type AppEntity = User | Product | Order | Shop;

type AppEntityKind = AppEntity["kind"];

type Plural<T extends string> = T extends `${infer U extends string}y`
  ? `${U}ies`
  : `${T}s`;
type Babies = Plural<"baby">;
//   ^?

type ToNumber<T extends string> = T extends `${infer N extends number}`
  ? N
  : never;
type One = ToNumber<"-1">;
//   ^?

type AppApiRoute = `/api/${Plural<AppEntityKind>}/${Id}`;
//   ^?

// SECOND EXAMPLE: ResolvePath
type IsAbsolute<Path extends string> = Path extends `/${string}` ? true : false;
type ResolvePath<
  BasePath extends string,
  Path extends string
> = IsAbsolute<Path> extends true ? Path : `${BasePath}/${Path}`;

// Tests
type A = ResolvePath<"/users", "/home">;
//   ^?
type B = ResolvePath<"/users", "1">;
//   ^?

// ignore the line below
export {};
