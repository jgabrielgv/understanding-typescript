/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle; // create an alias to the namespace

// calculate with namespaces
const PI = 2.99; // we can create an external variable

console.log('Rectangle', MyMath.calculateRectangle(10, 20));
console.log('Circumference', CircleMath.calculateCircumference(3));
console.log('Outside PI', PI);
