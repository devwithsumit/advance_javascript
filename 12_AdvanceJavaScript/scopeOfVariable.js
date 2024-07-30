// let - block scope
// var - global scope
{
    let a = 'let'
    var b = 'var' //global scope - can be used anywhere in this script
}
// a;//cannot be used here
console.log(b);//var

//when variable is defined inside a function they become local to it 
//means they cannot be accesed outside the function even if it is var type
function fun(){
    var c = 0;
}
console.log(c);//error