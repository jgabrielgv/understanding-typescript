console.log('CLASSES');

class Person {
    name: string; // public by default
    private type: string | undefined; // only accesible within the object
    protected age: number = 27; // accesible from any object or class that inherit from this class

    // we are creating the username and assigning the value at once. Basically is the same as we do with name
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log('Age', this.age);
        this.setType('Old guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log('Type', this.type);
    }
}

const person = new Person('Terry', 't004');
console.log('First person', person);
person.printAge();
// person.setType('Cool guy'); // won't work with private method
console.log('First person (2)', person);

console.log('INHERITANCE');

class Max extends Person {
    // name = 'Max'; // overrides the content of the parent class

    constructor(username: string) {
        super('Max', username); // we force the name to be Max
        this.age = 31; // we override age
        // console.log(this.type); // cannot print the type because it only exists in parent as a private property
    }
}
const max = new Max('max');
console.log('Max person', max);

console.log('GETTERS & SETTERS');

class Plant {
    private _species: string = 'Default';

    get species(): string {
        return this._species;
    }

    // assign the value to _species based on the necessary logic;
    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log('Plant species', plant.species);
plant.species = 'AB';
console.log('Plant species (2)', plant.species);
plant.species = 'Green Plant';
console.log('Plant species (3)', plant.species);

console.log('STATIC PROPERTIES & METHODS');

class Helpers {
    static PI: number = 3.14; // static keyword allows to access the element without stantiate the actual class
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log('Two times PI', Helpers.calcCircumference(2));

console.log('ABSTRACT CLASSES');

abstract class Project {
    projectName: string = 'Default';
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    
    // the compiler forces to implement this method
    changeName(name: string) {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log('New project', newProject);
newProject.changeName('Super IT Project');
console.log('New project (2)', newProject);


console.log('PRIVATE CONSTRUCTORS & READONLY PROPERTIES');

// singleton pattern
class OnlyOne {
    private static instance: OnlyOne;

    // initializes a constructor that accepts the name as a readonly value
    private constructor(public readonly name: string) {}

    static getInstace() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

// let wrong = new OnlyOne('The Only One'); // the constructor is private so the class cannot be instantiated
let right = OnlyOne.getInstace();
console.log('Singleton class value', right);
// right.name = 'Something else'; // not a valid code since name is readonly
