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

