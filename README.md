# AluraBank

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
