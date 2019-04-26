// simple generic

// kind of a generic function
function echo(data: any) {
    return data;
}

console.log(echo('Max'));
console.log(echo(27));
console.log(echo({ name: 'Max', age: 27 }));

// better generic way
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('Max')); // the IDE has now intellisense support
console.log(betterEcho<number>(27)); // we can also explicitly define the T type
// console.log(betterEcho(27).length); // it also throws exception because the compiler knows the element type
console.log(betterEcho({ name: 'Max', age: 27 }));

// built-in generic

const testResults: Array<number> = [1.94, 2.33];

// testResults.push('Test'); // get this exception: Argument of type '"Test"' is not assignable to parameter of type 'number'.
testResults.push(-2.99);
console.log('testResults', testResults);

// arrays

function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}

// the string type is explcitly defined
printAll<string>(['Apple', 'Banana']);

// generic types

// just define the function as a generic function and assign echo to it
const echo2: <T>(data: T) => T = echo; // also works assigning betterEcho instead of echo

console.log('echo2', echo2('Something'));

// generic classes

class SimpleMath<T> {
    baseValue: T;
    multiplyValue: T;

    // the first data type passed will define the T type.
    constructor(baseValue: T, multiplyValue: T) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath('something', '20'); // need to pass '20' because the compiler considers string as the T type
console.log('simpleMath', simpleMath.calculate()); // the result is NaN because the compiler doesn't know about the cast to number in calculate() method

// the syntax "T extends number" is known as a constrant
class SimpleMathExtended<T extends number> {
    baseValue: T;
    multiplyValue: T;

    // the first data type passed will define the T type.
    constructor(baseValue: T, multiplyValue: T) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate() {
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMathExtended = new SimpleMathExtended(10, 20); // now it complains if we pass something that is not value
console.log('simpleMathExtended', simpleMathExtended.calculate()); // the result is NaN because the compiler doesn't know about the cast to number in calculate() method

class SimpleMathTwoGenerics<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;

    // the first data type passed will define the T type.
    constructor(baseValue: T, multiplyValue: U) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }

    calculate() {
        // we need to cast the value so the compiler won't complain
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMathTwoGenerics = new SimpleMathTwoGenerics(10, '30'); // this time we need to be certain that the actually value that we pass can be casted to a numeric value
console.log('simpleMathTwoGenerics', simpleMathTwoGenerics.calculate()); // the result is NaN because the compiler doesn't know about the cast to number in calculate() method
