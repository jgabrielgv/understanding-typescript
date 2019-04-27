# Section 11: Typescript Workflows

## How Typescript resolves Files using tsconfig.json File

The "tsc" command looks for the tsconfig.json and then reads it to know how it should behave.

## Set of options in tsconfig.json

The "tsc -w" for example, watches for any ".ts" files change to re-compile them all. If we use the "exclude" options, we can exclude folders/files that we want to ignore when typescript is resolving the files that should compile/watch.

The "files" options is a "white list" instead (folders/files). This tells the typescript compiler what should it compile. The rest is going to be ignored.

## Running tsc against a specific set of files

You can specify one or more files that the tsc command should run against to. For example:

```tsc app.ts app2.ts```

Also the [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) allow to define custom rules at them time of running tsc, for example -w (--watch) or --sourceMap.

## Setting up Gulp + Typescript

```$ npm install --save-dev gulp gulp-typescript```

Build the .ts files with gulp

```$ npm run build```

In case that you get the exception "typescript not found" just install typescript locally

```$ npm install --save-dev typescript```

## Setting up Webpack + Typescript

```$ npm install --save-dev webpack ts-loader```

Don't need to include any "exclude", "module" or "sourceMap" options in tsconfig.json because webpack controls it for us.

As for webpack Webpack 4+ we need to install the webpack cli:

```$ npm install webpack-cli --save-dev```

Build the bundle.js file:

```$ npm run build```

In case that you get the exception "typescript not found" just install typescript locally

```$ npm install --save-dev typescript```
