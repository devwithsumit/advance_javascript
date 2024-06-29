//Promise :- is a promise for a code execution
// whether it executes or fails user will be notified

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('i am promise1 and i am completed')
        resolve('pizza is ready ✅')
    }, 2000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('i am promise2 and i am completed')
        reject(new Error('pizza khatam ! ❌'))
    }, 2000);
})
// then and catch --
// p1.then(alert)
p1.then((value) => {
    console.log(value)
}, (error)=>{
    console.log(error);
})// ('for value','for error')
// or then and catch another method
p2
    .then((value) => {//resolve value
        console.log('Promise2 resolved successfully!' + value);
    })
    .catch((error) => {//reject error
        console.log('Promise2 rejected:', error);
    });

// console.log(p)
//     setInterval(() => {
// }, 1000);