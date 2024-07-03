// // 1.
// function loadScript(url) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script')
//         script.src = url
//         script.async = true;
//         script.onload = () => {
//             resolve(url)
//         }
//         script.onerror = () => {
//             reject(url)
//         }
//         document.body.appendChild(script)
//     })
// }
// loadScript('https://cdn.tailwindcss.com').then((value)=>{
//     alert('successfully loaded '+ value)
// })
// .catch((error)=>{
//     alert('error in src '+ error)
// })

// // 2.
// async function loadScript(url) {
//     const result = new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = url
//         script.onload = () => {
//             setTimeout(() => {
//                 resolve(url)
//             }, 2000);
//         }
//         script.onerror = () => {
//             setTimeout(() => {
//                 reject(url)
//             }, 3000);
//         }
//     })
//     document.body.appendChild(script)
//     return await result
// }
// let a = loadScript('https:/1/cdn.tailwindcss.com')
// a.then((value) => {
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// }) 

// 3.
// const x = async function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error('rejected after 3 seconds'))
//         }, 3000);
//     })
// }
// const  main = async ()=>{
//     try {
//         let a = await x()

//     } catch (error) {
//         console.log(error);
//     }
// }
// main()

// 4.
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000);
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//         // reject(new Error('error'))
//     }, 3000);
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3)
//     }, 5000);
// })
// async function run(){
//     let prom1 = await p1
//     // console.log(prom1);
//     let prom2 = await p2
//     // console.log(prom2);
//     let prom3 = await p3
//     // console.log(prom3);
//     return [prom1, prom2, prom3]
// }

// run().then((value) => {
//     console.log(value);
// })

let prom1 = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 2000);
    })
}
let prom2 = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 3000);
    })
}
let prom3 = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 3500);
    })
}
async function run(){
    console.time('run')
    // let p1 = await prom1() //wait until all the values are fetched
    // let p2 = await prom2()
    // let p3 = await prom3()

    let p1 = prom1()
    let p2 = prom2()
    let p3 = prom3()

    let p_all = await Promise.all([p1, p2, p3])
    console.log(p_all);
    console.timeEnd('run')

    // return [p1, p2, p3]
}

run()
    // .then((value) => {
    //     console.log(value);
    // })