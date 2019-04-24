# Section 6

## Part 1

One way to bundle all .ts files into one resulting .js file is

```$ tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts```

The other way is to reference both files in app.ts

```typescript
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
```

And bundle the --outFile but this time only against app.ts

```$ tsc app.ts --outFile app.js -w```

Typescript modules are greate for small projects

## Part 2

Just run $ tsc -w (-w to watch for changes)

## Namespaces vs Modules

Namespaces:

* Organize Application with JS Objects
* Can be split up over multiple Files
* No Module Loader required
* Dependencies get difficult to manage in bigger Applications

Modules:

* Organize Applications with real Modules
* Can be split up over multiple Files
* Module Loader required
* Explicit Dependency Declaration
