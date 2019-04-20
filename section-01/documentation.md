# Section 1

Basic commands and steps to successfully run our typescript files

## Commands

### ``$ npm -g install typescript``

Installs the typescript library globally

### ``$ tsc app.ts``

Transpiles a .ts file into its javascript representation. At this point, we are able to run our application by importing the generated app.js file at the very bottom of the page

### ``$ npm init``

Creates a package.json file. it's fine if you leave blank all  options while creating this file

### ``$ npm install lite-server``

Library that automatically updates the application whatever we change the js code. Note: The .ts files always need to be converted to .js (because we don't want to modify the .js files directly) so that live-server will actually detect what changed

### Adding *start* script

Add a new script under the package.json file to run lite-server automatically and name it *start*

```"main": "script.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
  },
  "author": "",
```

### ``$ tsc --init``

Creates a tsconfig.json file. It tells the compiler that the project that we are running is configured for using typescript and that it should detect and compile all .ts files and convert them to .js

### ``$ tsc``

The compiler will detect all the .ts files and convert them to .js extension. This is possible thanks to the configuration added in the previous step

### ``$ npm start``

Start the application. The lite-server is now listening for any change

### Other considerations

In case that we edit a .ts and we want the browser to be aware of this, just run ``tsc`` again

The files with other extension types will be easily detected by live-server as well. e.g.: index.html
