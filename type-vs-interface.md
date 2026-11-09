# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript provides two ways to define a type: `type` and `interface`. Both work almost the same when defining the structure of an object. However, they have some differences. Understanding these differences will help you decide when to use type and when to use interface.

## Body

An interface can only describe the shape of an object. A type alias can name any type, including primitives, unions, tuples and function types.

```ts
interface User {
  name: string;
  age: number;
}

type ID = string | number;
type Point = [number, number];
type Greet = (name: string) => string;
```

## Extending Types

Interfaces use `extends`, while type aliases combine types with an intersection (`&`). Both give the same result for objects.

```ts
interface Admin extends User {
  role: string;
}

type Editor = User & { canPublish: boolean };
```

## Merging

If you declare an interface with the same name more than once typeScript automatically combines them into one. But you cannot declare a type with the same name twice. TypeScript will show an error.

```ts
interface Settings {
  theme: string;
}
interface Settings {
  language: string;
}

type Config = { debug: boolean };
// type Config = { port: number }; // Error: Duplicate
```

Merging is useful when you want to add properties to types from a library, such as `Window`.

## When to Choose Which

Use an **interface** for object shapes, for class contracts with `implements`, and for public APIs that other code may need to extend. Use a **type alias** for unions, tuples, function signatures and advanced types such as mapped or conditional types, which interfaces cannot express.

Use an **interface** when defining the structure of an object, creating rules for classes using `implements`, or building public APIs that other developers may want to extend. Use a **type** when working with union types, tuples, function types, or more advanced types like mapped and conditional types. These are things that interface cannot handle.

## Conclusion

Interface and type are quite similar, but they are not exactly the same. An interface is mainly used to define the structure of an object, and it can be extended or merged with other interfaces. A type is more flexible because it can represent different kinds of types, not just objects.
