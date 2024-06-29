//multiple Handlers of single promise
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
//.then() don't pass the value to each other
p1.then(()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 2000);
    })
}).then((value)=>{
    console.log(value);
})
p1.then((value)=>{ // value == resolve(1) of p1 not of p1.then()
    console.log('hurrraayyyy...'+value);
})
p1.then(()=>{
    console.log('this promise is resolved');
})