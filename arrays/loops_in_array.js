let arr = [2, 4, 5, 6, 2]
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//for each
arr.forEach(function printelem(e){
    // console.log(`${arr[i]} x ${arr[i]}`);
    console.log(e);
})

//array.from() -convert to array from other object
let a = document.getElementsByClassName('box')
console.log(a); //html collection
let b = Array.from(a); // returns new array do not change original

b.forEach((e)=>{
    console.log(e);
})
const name = 'sumit'
let arr1 = Array.from(name)
console.log(arr1);

//for of loop
const xrray = [3,2,1,7,1]
for(i of xrray){
    console.log(i);
}
//for in loop - returns keys (index is the key in array)
for(i in xrray){
    console.log(i);
}
