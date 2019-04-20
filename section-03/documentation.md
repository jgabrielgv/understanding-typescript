# Section 3

## How code gets compiled

Note: this whole section is dedicated to go over some of the options changeable in tsconfig.json

The compiler by default will transpile the code not matter if it has syntax errors or not

The "target" option is the javascript version that it should be compiled to. The default is es5

The "noEmitOnError" option specifies if the javascript files should or not be generated if there are syntax errors. Once we change it to true, then the compiler won't generate these corrupted files

If "noImplicitAny" is changed to true, the intellisense will notify that no variables can be initialized of type any

The "sourceMap" flag defines if a .js.map file should be created for every new .js file. The .js.map files hold the logic to actually see and debug the .ts file on the client side

The option "strictNullChecks" validates that a variable cannot be used as long as it is created but a value was never assigned to it

"noUnusedParameters" implies that all passed parameters need somehow to be used

More information about tsconfig.json can be found [here](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
