//Promise Chaining and .then() calls
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('p1 is completed')
        resolve(1)
    }, 2000);
})
//this .then() will run when the p1 promise is completed
let p2 = p1.then((value) => {
    console.log(value);
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('p2 is completed')
            resolve(2)
        }, 2000);
    })
})
//this .then() will run when the p2 promise is completed
let p3 = p2.then((value)=>{
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('p3 is completed')
            resolve(3)
        }, 2000);
    })
})
p3.then((value)=>{
    console.log(value);
})


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('p1 is completed')
//         resolve(1)
//     }, 2000);
// })
// let p2 = p1.then((value) => {
//     console.log(value);
//     return 2 //default promise will be created with resolved value as 2
// })
// let p3 = p2.then((value) => {
//     console.log(value);
//     return 3 //default promise will be created with resolved value as 3
// })
// p3.then((value) => {
//     console.log(value);
// })


//Quiz - loadScript using promise
// function loadScript(url) {
//     return new Promise((resolve, reject) => {
//         let scriptTag = document.createElement('script')
//         scriptTag.src = url
//         document.head.append(scriptTag)
//         scriptTag.onload = () => {
//             resolve(url);
//         }
//         scriptTag.onerror = () => {
//             reject(url)
//         }
//     })
// }
// let p1 = loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js');
// p1.then((value) => {
//     console.log('succesfully loaded ' + value);
//     return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
// }).then((value)=>{
//     console.log('2nd script is ready',value);
// }).catch((error)=>{
//     console.log('some error occured in script ',error);
// })