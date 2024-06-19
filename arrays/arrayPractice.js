
// Q1.input elements into array from the user

// const arr = []
// let length = prompt('Enter length')
// for (let i = 0; i < length; i++) {
//     arr[i] = prompt(`enter elements`);
// }
// console.log(arr);

// Q2.keep adding elements until user enters 0
// const arr = []
// let add;
// while(add != 0){
//     add = Number.parseInt(prompt('add element'))
//     arr.push(add)
// }
// console.log(arr);


// Q3.filter numbers divisible by 10 from given array
// const arr = [10,55,20,45,33,50]
// let brr = arr.filter(function(e){
//     return e % 10 == 0
// })
// console.log(brr);

// Q4.create an array of sqaure of the given elements
// const arr = [2,4,6,1,5,0]
// let brr = arr.map(function (e) {
//     return e * e
// })
// console.log(brr);

// Q5.
function fact(a) {
    if (a == 1) return 1
    return a * fact(a - 1)
}
const arr = [1,2,3,4,5]
let brr = arr.reduce(function (e1,e2) {
    return e1*e2
})  
let xrr = arr.map(function (e) {
    return fact(e)
})  
console.log(brr);
console.log(xrr);