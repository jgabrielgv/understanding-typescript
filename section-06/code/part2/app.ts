import * as Circle from './math/circle'; // typescript is clever at resolving if the path is relative or absolute
import calcu from './math/rectangle'; // Even though the default exported method is calculateRectangle() we can use whatever alias we want

// calculate with modules
console.log('PI (module)', Circle.PI);
console.log('Circumference (module)', Circle.calculateCircumference(3));
console.log('Rectangle (module)', calcu(20, 50));
