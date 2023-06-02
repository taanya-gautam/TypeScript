let message: string = 'Hello, TypeScript!';
//console.log(message);
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);


//Type annotations in variables and constants
//syntax
//let variableName: type;
//let variableName: type = value;
//const constantName: type = value;

let counter: number;
counter = 1;
counter = 'Hello'; // compile error 