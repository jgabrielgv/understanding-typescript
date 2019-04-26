# Section 9: Behind the Scenes with Decorators

Allow to extend a class or add functionality by adding a decorator to it.

It is not specific to typescript.

Print this (using Chrome):
ƒ Person() {
        console.log('Hi!');
    }

https://www.typescriptlang.org/docs/handbook/decorators.html

## Factor

The decorator can be called directly or indirectly. As for indirectly technique, we create a factor (a decorator itself) to resolve, include, exclude other decorators, etcetera

## Notes

Set "strictNullChecks" to false to avoid this exception thrown by typescript:
Unable to resolve signature of class decorator when called as an expression.
  Cannot invoke an expression whose type lacks a call signature. Type '((constructorFn: Function) => void) | null' has no compatible call signatures.