
//Q. find factorial of n
// let a = prompt(`enter number to find factorial`)
// a = Number.parseInt(a)
// fact = 1
// for (let i = 1; i <= a; i++) {
//     fact = fact * i
// }
// console.log(`!${a} = ${fact}`);


//forIn loops used for iterate over properties of an object
// const obj = {
//     name : 'sumit',
//     id : 185,
//     age : 20,
// }
// for (i in obj){
//  console.log(i);
// }

//forOf loops iterate through iterable objects like array or string
const arr = [
    {name: 'Sumit'},
    {id: 185},
    {age: 20},
]
for (i of arr) {
    console.log(i);
}
