# Typescript tutorial

## ``$ npm -g install typescript``

## ``$ tsc .\app.ts``

### for compiling from typescript files to javascript

### ``$ npm init``

#### select all options by default

### ``$ npm install lite-server``

#### updates the application whatever we change the js code

### Add a new script under the package.json to run lite-server automatically and name it *start*

```"main": "script.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
  "author": "",
```

### ``tsc --init``

#### Creates a tsconfig.json file

#### Puts the project under the control of typescript

#### Tells the compiler that the project that we are running is in typescript and that should detect and compile all .ts files and convert them to .js

### ``tsc .\app.ts``

#### Compiles all .ts files to javascript at once on the selected project (including nested folders)
