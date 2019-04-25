// contract when an object needs to be of type Person
interface NamedPerson {
    firstName: string;
    secondFirstName?: string;
    age?: number;
    [propName: string]: any; // in case that you don't know the property name in advance
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log('Hello', person.firstName, 'Hobbies', person.hobbies); // we print hobbies because the transpiler doesn't complain about printing non-explicitly defined properties
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anna';
}

// no need to implement age because it is optional
const person: NamedPerson = {
    firstName: 'Max',
    // secondLastName: 'Adams', // should not assign an unknown variable by the interface contract
    greet(lastName: string) {
        console.log('Hi, I am', this.firstName, lastName);
    },
    hobbies: ['Cooking', 'Sports'], // this is possible due to the propName property
    hobbies2: ['My other array value'], // also possible due to the propName property
};

greet({
    firstName: 'Margarye',
    secondFirstName: 'Marie',
    greet(lastName: string) {
        console.log('Hello, I am', this.firstName, lastName);
    }
}); // any value is acceptable as long as it fulfills the contract.
changeName(person);
greet(person);

class Person implements NamedPerson {
    firstName: string;
    lastName?: string | undefined; // define it as undefined so it won't argue

    constructor(firstName: string) {
        this.firstName = firstName;
    }

    greet(lastName: string) {
        console.log('Hi, I am', this.firstName, lastName);
    }
}

const myPerson = new Person('Maximiliam');
greet(myPerson);
myPerson.lastName = 'Anything (2)';
myPerson.greet('Anything');
myPerson.greet(myPerson.lastName);

// functions

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc = function(value1: number, value2: number): number {
    return (value1 + value2) * 2;
}

console.log('My double function', myDoubleFunction(10, 20));

// interface inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: 'Max',
    greet(lastName: string) {
        console.log('Hello!', lastName);
    }
}

console.log('Old person', oldPerson);
