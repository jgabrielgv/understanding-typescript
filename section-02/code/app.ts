// string
let myName = 'Max';
// myName = 28; // cannot run $ tsc because it is converting from string to number.

let myAge = 27;
// myAge = 'Max';

// boolean
let hasHobbies = true;
// hasHobbies = 1;

// assign types
let myRealAge; // same as doing myRealAge: any;
myRealAge = 27;
myRealAge = '27'; // no errors if run tsc

let myNewAge: number;
myNewAge = 28;
// myNewAge = '28'; // throws intellisense exception

// array
let hobbies: string[] = ['Cooking', 'Sports'];
// console.log(typeof hobbies);
// hobbies = [100]; // cannot assign an array of string to an array of numbers.
// hobbies = 100; // neither just a variable

// tuples
let address: [string, number] = ['Superstreet', 99]; // needs to respect the type order
console.log(`My address is ${address[0]}, ${address[1]}`);

// enum
enum Color {
    Gray, // 0
    Green = 100,
    Blue // 101. It continues on from the previous value.
}; // behind the scenes stand for integers

let myColor: Color = Color.Green;
console.log(`My green color: ${myColor}`);

let myBlueColor: Color = Color.Blue;
console.log(`My blue color: ${myBlueColor}`);

// any
let car: any = 'BMW';
console.log(`My car (string): ${car}`);
car = { brand: 'BMW', series: 3 };
console.log(`My car (object): ${car}`);

// functions
function returnMyName(): string {
    return myName; // complains if you return a non-string value
}
console.log(`returnMyAge: ${returnMyName()}`);

// void
function sayHello(): void {
    console.log('Hello!');
    // return 'hello'; // complains because we explicity tell the method to be void
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// console.log('Surpassed multiply result:', multiply(1, 'Max')); // tsc complains because we are passing a string-type parameter.}
console.log('Valid multiply result:', multiply(2, 3)); // should run without issues

// function types (dynamic assignment)
let myMultiply: (val1: number, val2: number) => number; // the definition of the function
// myMultiply = sayHello; // sayHello does not satisfy the function to accept two parameters and return a number
// myMultiply();
myMultiply = multiply; // reassigns myMultiply to be multiply
console.log('myMultiply:', myMultiply(3, 6));

// objects
// we are strongly defining the property types. Not neccesary if we want to use the object just once in the same file
let userData: { name: string, age: number } = {
    name: 'Max', // typescript recognizes this property as string. It cannot be reassigned to other type
    age: 27 // typescript recognizes this property as number
};

// userData = {
//     a: 'Hello', // throws an errors since it is trying to change the original structure of the object
//     b: 22
// };

// complex object
// just an object that wraps up everything see until now
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// complex = {};

// type alias

type Complex = { data: number[], output: (all: boolean) => number[] };

// the Complex type can now be reused
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
// it is telling typescript that the value may be either number or string. It can be chained with as many types as you need
let myRealRealAge: number | string = 27;
myRealRealAge = '27';

// check types
let finalValue = 30;

if(typeof finalValue == 'number') {
    console.log('Final value is a number');
}

// never type
// the function never finishes. Used in parts of the application where it should never be reached
function neverReturns(): never {
    throw new Error('An error!'); // it just returns an error in this case
}

// nullable types
// "strictNullChecks": true (tsconfig.json)
//Fails compiling if we assign a non-nullable no nullable value

let canBeNull: number | null = 12;
canBeNull = null; // fixed using union types
let canAlsoBeNull;
canAlsoBeNull = null; // works just like javascript
let canThisBeAny: null = null;
// canThisBeAny = 12; // fails re-assigning a non-nullable value

