# AluraBank

![TypeScript Badge](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)
![HTML Badge](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=css3&logoColor=white)

Website created during the course: <a href="https://cursos.alura.com.br/course/typescript-parte1" tagret="blank_">TypeScript parte 1: Evoluindo seu Javascript</a>.
<br>
<br>
## Things learned in this course:
### How to create a TypeScript application:
#### 1 - Initialize the application.
#### `npm init`
It will create a file called _package.json_, which contains information about the application modules.
```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
#### 2 - Add the TypeScrpit depedecy.
#### `npm install typescript@2.3.2 --save-dev`
It will insert a section to the _package.json_ file adding the TypeScript dependency.
```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^2.3.2"
  }
}
```
ps.: 2.3.2 was the latest version of TypeScript at th time of the course creation. It can be replaced by the current latest version.

#### 3 - Create the compilation configuration script.
<br>
A script containing the compilation configuration must be created, in this course it was called _tsconfig.json_.
```json
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js"
    },
    "include": [
        "app/ts/**/*"
    ]
}
```

#### 4 - Add the compile configuration script to the _package.json_ file.
```json
"compile": "tsc"
```

The complete file content will be as following:
```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^2.3.2"
  }
}
```
This will enable the compilation to be made.
<br>
#### `npm run compile`

#### 5 - Make the compilation of changed TypeScript automatic.
In order to make the compilation of changed TypeScript automatic, another script should be addes to the _package.json_ file.
```json
"start": "tsc -w"
```
Complete _package.json_ content after adding the script.
```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "tsc -w"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^2.3.2"
  }
}
```

This will enable the use of `npm start`, which will monitor the TypeScript files for change and compile them whenever a change os made.

#### 6 - No Emit on Error
It is recommended to configure the compiler to not generate JavaScript files when there are TypeScript compilation erros, we can achieve this by adding the directive `"noEmiteOnError"` to the compilation configuration file (_tsconfig.json_).
```json
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true        
    },
    "include": [
        "app/ts/**/*"
    ]
}
```

#### 7 - Force the definition of variables types
By default, TypeScript considers all variable to be of the `any` type. This menas that the variable could be of any type. To avoid this we can force the definition of variable types by adding to the configuration `"noImplicitAny"` to the _tsconfig.json_ file.
```json
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": true
    },
    "include": [
        "app/ts/**/*"
    ]
}
```

#### 8 - Remove comments
To avoid comments on to the .ts files to be added to the generated .js files, the option `removeComments` should be added to the _tsconfig.json_ file and set to _true_.
```json
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true
    },
    "include": [
        "app/ts/**/*"
    ]
}
```
#### 9 - TypeScript Definition File
In order for the IDE to recognize the syntax of external libraries a file of the type tds (typescript definition file) must be added to the project. In this project JQuery was used and its tds file was added.

#### `npm install @types/jquery@2.0.42 --save-dev`

#### 10 - Module Loader
When the application is structured in modules, a loader must be added to the _tsconfig.json_ file
```json
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system"
    },
    "include": [
        "app/ts/**/*"
    ]
}
```

#### 11 - Local Server
The module loader uses XMLHttpRequest, so it needs to be run on a server.
The server can be installed using the following instruction:

#### `npm install lite-server@2.3.0 --save-dev`

After installing the server we have to add a new option on the `package.json` file to run it.
```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "tsc -w",
    "server": "lite-server --baseDir=app"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}
```

#### 12 - Concurrently
Concurrently allow us to run mutilpe scripts in parallel, it can be installed by running:

#### `npm install concurrently@3.4.0 --save-dev `

After installing we can change the `package.json` file ro run the server and the compiler in parallel.
```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "watch": "tsc -w",
    "server": "lite-server --baseDir=app",
    "start": "concurrently \"npm run watch\" \"npm run server\""
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "concurrently": "^3.4.0",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}
```
#### 13 - Strict Null Checks
`strictNullChecks` disallows the attribution of null and undefined values to variables, unless the variable is of the null type.

```json
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true, 
        "noImplicitAny": true,
        "removeComments": true,
        "module": "system",
        "strictNullChecks": true
    },
    "include": [
        "app/ts/**/*"
    ]
}
```
