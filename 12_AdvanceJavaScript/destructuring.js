let arr = [4, 5, 3, 7, 8, 9, 0]
let [a, b, c] = arr
let [d, e, ...rest] = arr
let [, , f, g] = arr //empty,empty,f = 3, g =7

console.log(a, b, c);
console.log(d, e, rest);
console.log(f, g);
const obj = { one: 1, two: 2 }
const { one, two } = obj;
console.log(obj);
console.log(`one : ${one}, two : ${two}`);


// spread operator
let arr1 = [4, 4, 23, 3]
let obj1 = { ...arr1 }
console.log(obj1);

//
let sum = (...n)=> {
    let a = 0
    n.forEach(e=>{
        a += e
    })
    return a
}
const numbs = [1, 2, 6,7,8]
console.log(`sum of numbs : ${sum(...numbs)}`);

//
let obj2 = {
    name : 'Sumit',
    branch : 'cse',
    id : 185
}
console.log({...obj2, name: 'Asmit'});
