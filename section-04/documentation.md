# Section 4

Not necessarily all ES6 Features are supported by TypeScript, but quite a lot of them are.

The following Compatibly Chart helps you find out if you're favorite Feature is supported: https://kangax.github.io/compat-table/es6/

while *var* creates a global scoped variable, the *let* keyword creates a block scoped variable

*const* variables cannot be reassigned

Spread operator spread out the array into single values

## Typescript 3 updates

Since TypeScript 3, you can also use tuples as types for rest expressions.

For example, these two function signatures are equal:

```javascript
function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
```

```javascript
function printInfo(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
```
