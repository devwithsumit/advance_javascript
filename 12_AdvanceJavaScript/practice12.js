// const a = 'the', b = 'no'
// const c = { a, b}
// console.log(c); //{a: 'the', b: 'no}

// 1.WAP to print hello and world after 2 seconds delay
// function print(text){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, 2000);
//     })
// }
// (async () => {
//     console.log(await print('hello'));
//     console.log(await print('world'));
// })()


// 2. WAP to find average of numbers using spread syntax (...n)

// function average(...args) {
//     sum = 0
//     args.forEach(e => {
//         sum += e
//     })
//     // return args.reduce((acc, currVal) => acc + currVal, 0) / args.length
//     return sum / args.length
// }
// const arr = [1, 2, 3, 4, 5]
// console.log(average(...arr));
// console.log(average());


// 3.WAP which resolves a promise after n seconds
// ((seconds) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('resolved after ' + seconds + ' seconds')
//         }, seconds * 1000);
//     })
// })(1)
//     .then(value => {
//         console.log(value);
//     })


// 4.SIMPLE INTEREST CACULATOR
function simpleInterest(p, r, t) {
    // console.log(`principal: $${p}`);
    // console.log(`rate: ${r}%`);
    // console.log(`time: ${t} years`);
    let pamout = p + (p * r * t) / 100
    return `$${(p * r * t) / 100}`
}
const si1 = simpleInterest(1000, 10, 1)
console.log(si1);



