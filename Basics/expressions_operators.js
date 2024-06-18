//expressions
// 77;
// 'sumit'
// let a = 5;
// console.log(++a);    //6 pre-increment
// console.log(a++);    //6 post-increment
// console.log(a)   //7
// console.log(--a);    //6 pre-decrement
// console.log(a--);    //6 post-decrement

//practice set questions
// 1.
// let age = prompt("what's your age ?");
// age = Number.parseInt(age); //string to int conversion
// if (age >= 10 && age <= 20) {
//     console.log("Age is between 10 and 20");
// }
// else{
//     console.log('not between 10 and 20');
// }

// 2.
// let age = prompt("what's your age ?");
// age = Number.parseInt(age); //string to int conversion
// switch (age) {
//     case 10:
//         console.log("Age is between 10 and 20");
//         break;
//     default:
//         console.log(`your age is ${age}`);
//         break;
// }

// 3.
// let a = prompt("Enter number : ");
// a = Number.parseInt(a)
// if (a % 2 == 0 && a % 3 == 0) {
//     console.log(`${a} is divisible by 2 and 3`);
// }
// else if (a % 2 == 0 || a % 3 == 0){
//     if (a % 2 == 0) {
//         console.log(`divisible by 2`);
//     }
//     if (a % 3 == 0){
//         console.log(`divisible by 3`);
//     }
// }
// else {
//     console.log(`not divisible by 2 and 3`);
// }

// 5.
let age = prompt("what's your age ?");
age = Number.parseInt(age); //string to int conversion
if (age >= 18) {
    console.log("You can drive");
}
else if(age <= 0) console.log(`invalid age`);
else{
    console.log('you cannot drive');
}
