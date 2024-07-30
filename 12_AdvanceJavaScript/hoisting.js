// Hoisting refers to the process where the interpreter appears to move the
// DECLARATIONS to the top of the code before execution.

// Note** --> js Only Hoists DECLARATIONS NOT INITIALISATION 
//* variable will be undefined untill where it is initialised */

//*** - var and let supports hoisitng but let puts a variable in a deadzone
console.log(a);
console.log(b);
var a = 0; // if a is not declared the above lines will give an error
var b;

greet() //works for functions too !
function greet(){
    console.log('Good morning !');
}
intro() // hoisting not works for function and class expression
var intro = ()=>{
    console.log('Hello');
}