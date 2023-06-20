//let input = document.querySelector('input[type="text"]');
//console.log(input.value);
//Since the returned type of the document.querySelector() method is the Element type, the following code causes a compiler error:
//The reason is that the value property doesn’t exist in the Element type. It only exists on the HTMLInputElement type.
//[a]using as operator
//1)
var input = document.querySelector('input[type="text"]');
console.log(input.value);
//2)
//The syntax for converting a variable from typeA to typeB is as follows:
var a;
var b = a;
//[b]
//Type Casting using the <> operator
// use the <> operator to carry a type casting.
var input = document.querySelector('input[type="text"]');
console.log(input.value);
//The syntax for type casting using the <> is:
var a;
var b = a;
Code;
language: TypeScript(typescript);
