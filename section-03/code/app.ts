let myName = 'Max';

console.log('My name is', myName);

let myAge: number;
myAge = 10;
// let func = (val: number) => val * 2;
// myAge = func; // throws an exception because myAge is number
// console.log('My func', myAge);

function sumValues(
    val1: number,
    val2: number,
    val3: number
) {
    return val1
    + val2
    + val3 // uncomment this line to see the exception thrown after enable "noUnusedParameters" in tsconfig.json
    ;
}

console.log('Summing values', sumValues(1,2,3));