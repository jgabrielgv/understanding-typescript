// logs information about the constructor of the class
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log('Hi!');
    }
}

// Factory
// we mask the function and make sure that the logged decorator will print only if the value is true, otherwise do nothing
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {
}


// advanced

function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this); // each object instantiated created based on a class class which has the printable decorator will automatically receive the print method. The print method allows the object to print itself to the console
    }
}

// you can also combine multiple decorators
@logging(true)
@printable
class Plant {
    name = 'Green Plant';
}

const plant = new Plant();
(<any>plant).print(); // can access print() method

// note: typescript cannot access properties the same way that it acceses methods

// method decorator

function editable(value: boolean) {
    // varies on the question if we have a static method or we are instantiating one which would be the prototype of the object.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

// property decorator

function overwritable(value: boolean) {
    return function(target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value // this will even apply to the value assigned in the constructor. So it's not that useful
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        // this.projectName = name; // cannot re-assign the non-overridable variable
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('Super Project');
project.calcBudget();

// this line should throw TypeError: "calcBudget" is read-only
// project.calcBudget = function() {
//     console.log(2000);
// }

project.calcBudget();

// parameter decorator

function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('target:', target);
    console.log('methodName', methodName);
    console.log('paramIndex', paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if(printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course = new Course('My course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);
