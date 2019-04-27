# Section 10: Using Typescript with Jquery

https://www.typescriptlang.org/docs/handbook/advanced-types.html

## Part 1: Default Configuration

### npm setup

* ``$ npm init``: Setup the package.json file.
* ``npm install lite-server``: Install lite-server. Not required. You can just run the index.html file without issues.
* Add the "start" script as it has been configured in previous folders.

### Install the JQuery types

```$ npm install --save-dev @types/jquery```

This allows to be able to access all the JQuery features from typescript perspective.

## Part 2: Legacy Configuration

How to use

Run "npm install" to install the required dependencies

Run "typings" to install the required typings (needs the "typings" package to be installed on your machine => "npm install typings -g")

Run "tsc" to compile the TypeScript code

Run "npm start" to run the development server (lite-server)
