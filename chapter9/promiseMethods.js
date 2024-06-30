let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
        // reject(new Error('error'))
    }, 1000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    },3000);
})
//  Math.floor(Math.random() * 10000)
//1.Promise.all - ** returns all resolved promises but doesn't work even if one of the promises is rejected
const p_all = Promise.all([p1, p2, p3]) 
console.log(p_all); 
p_all.then((value)=>{
    console.log(value);//array of results of p1,p2,p3
})

//2.Promise.allSettled([promises]) - works even if one of the promises is rejected
// const p_all = Promise.allSettled([p1, p2, p3]) 
// p_all.then((value)=>{
//     console.log(value);
// })

//3.Promise.race([promises]) - first completed promise but shows an error if first completed promise is rejected
// const p_all = Promise.race([p1, p2, p3]) 
// p_all.then((value)=>{
//     console.log(value);
// })

//4.Promise.any([promises]) - first resolved promise
// const p_all = Promise.any([p1, p2, p3]) 
// p_all.then((value)=>{
//     console.log(value);//returns 1
// })

//5.Promise.resolve(value) - custom resolved promise with given value
// const resolved_promise = Promise.resolve(5)
// resolved_promise.then((value)=>{
//     console.log(value);
// })
//6.Promise.reject(error) - custom rejected promise with given error
// const rejected_promise = Promise.reject(new Error('custom error')) 
// rejected_promise.catch((error) => {
//     console.log(error);
// })