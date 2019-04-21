// let & const
console.log('LET & CONST');

var variable = 'Test'; // global scoped variable.
console.log('var variable', variable);
let otherVariable = 'Other variable'; // creates a block scoped variable

const maxLevels = 100;
console.log('Max levels', maxLevels);
// maxLevels = 99; // cannot reassign a const value

// block scope
function reset() {
    let variable = null;
    console.log('Variable inside reset()', variable);
}
reset();
console.log('Global scoped variable', variable);

console.log('ARROW FUNCTIONS');

const addNumbers = function(number1: number, number2: number) {
    return number1 + number2;
}
console.log('addNumbers', addNumbers(10, 3));

const multiply = (number1: number, number2: number) => number1 * number2; // es6 feature indeed but typescript supports it
console.log('multiply (arrow function)', multiply(10, 3));

const greet = () => {
    console.log('Hello!');
};
greet();

const greetFriend = (friend: string) => console.log('Hello', friend);
greetFriend('Roy');

console.log('DEFAULT PARAMETERS');

// the value can be assigned by default in case that no value is passed to the function
const countDown = (start: number = 10): void => {
    while(start > 0) {
        start--;
    }
    console.log('Done!', start);
}
countDown();
console.log('Overriding 10 value on countDown()');
countDown(20);

// Rest & Spread operators
console.log('REST & SPREAD');

const numbers = [1, 10, 99, -5];
console.log('Math.max() by explicitly passing parameters', Math.max(33, 99, 10, -3));
console.log('Math.max() by using spread operator', Math.max(...numbers));

// this is very conversome
function makeArray(arg1: number, arg2: number) {
    return [arg1, arg2];
}

// rest operator. Accepts multiple values and put them into one array
function makeArrayRest(...args: number[]) {
    return args;
}
console.log('makeArrayRest', makeArrayRest(1, 2, 6));

// the not-to-be-combined parameters go first
function printStudentInfo(name: string, ...grades: string[]) {
    console.log('Name', name, '. Grades:', grades);
}
// the first passed value is the name and the last three ones are grades
printStudentInfo('Jenny', 'A', 'B', 'A');

// Since TypeScript 3, you can also use tuples as types for rest expressions.

// For example, these two function signatures are equal:

function printInfo(name: string, age: number) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}

function printInfoTs3(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
printInfoTs3('Carlie', 35);

// destructuring
console.log('DESTRUCTURING');

const myHobbies = ['Cooking', 'Sports'];
const [hobby1, hobby2] = myHobbies;

// console.log('myHobbies', myHobbies[0], myHobbies[1]);
console.log('myHobbies destructed', hobby1, hobby2);

const userData = { userName: 'log05', age: 22 };
// default way
// const userName = userData.userName;
// const age = userData.age;
// destructing object values
// if we assign a colon then an alias is required
const { userName, age: myAge } = userData;
console.log('username', userName, 'age', myAge);

const complexObject = {
    name: 'Juan',
    address: {
        addressLine1: 'Line 1',
        city: 'my city'
    },
    grades: ['B1', 'B2']
};

const {
    name: objName, // extract name into objName
    address: {
        addressLine1: line1 // extract addressLine1 into line1
    },
    grades: { 1: grade1 } // extract the grades[1] value and save it to grade1
} = complexObject;

console.log('Obj name', objName, 'line 1', line1, 'grade 1', grade1);

// Template literals
const otherUserName = 'Bob';
// console.log('The default way to concat values ' + otherUserName);
// using template literals
console.log(`I'm ${otherUserName}`);
// supports multiline strings
console.log(`I'm
${otherUserName}
multiline`);

// other es6 features. For example: symbols, iterators or generators
