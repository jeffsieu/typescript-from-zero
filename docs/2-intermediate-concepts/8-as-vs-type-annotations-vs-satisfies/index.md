# `as` vs type annotations vs `satisfies`

We have now learned 3 ways to denote types:

- Type annotations (e.g. `const x: string`)
- Type assertions (`as`)
- `satisfies`

What are their differences and when do we use them?

Try to use type annotations as much as possible. Use `satisfies` when you need to retain the inferred type of your variable. Never use type assertions, if possible.
