# How TypeScript Compiles: tsc and tsconfig.json

## Introduction

Browsers and Node.js cannot run TypeScript directly. They only understand JavaScript. The TypeScript compiler, `tsc`, checks our code for type errors and then turns it into plain JavaScript. The `tsconfig.json` file tells the compiler how to do this.

## What Happens Inside tsc

The compiler works in a few steps. First, the **scanner** read the source code into tokens. Next, the **parser** takes those token builds a tree called an Abstract Syntax Tree (AST). Then the **binder** connects variable and function names to where they are declared. After that, the **type checker** checks the code and finds type errors, such as using a string where a number is expected. Finally, the **emitter** writes the `.js` output.

## Types Are Erased

The most important idea is **type erasure**. All type annotations, interfaces and type aliases are removed from the output, so types do not exist at runtime.

```ts
// input: app.ts
interface User {
  name: string;
}
const greet = (user: User): string => `Hi ${user.name}`;
```

```js
// output: app.js
const greet = (user) => `Hi ${user.name}`;
```

By default, `tsc` still writes the JavaScript even when there are type errors. You can stop this with the `noEmitOnError` option.

## The Role of tsconfig.json

The `tsconfig.json` file marks the root of a project and stores the compiler settings, so you can just run `tsc` without passing any options.

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "outDir": "./dist",
    "skipLibCheck": true,
    "moduleDetection": "force"
  }
}
```

`target` sets which JavaScript version to output. `module` sets the module system. `strict` turns on stricter type checks. `outDir` sets the output folder. `moduleDetection: "force"` makes TypeScript treat every file as a module.

## Conclusion

`tsc` reads your TypeScript code, checks for type errors, removes the type information, and converts it into regular JavaScript.The `tsconfig.json` file contains the compiler settings, so everyone on the team can compile the project using the same rules.
