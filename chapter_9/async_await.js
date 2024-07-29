//async function always returns promise by default
// async function demo(){
//     return 0
// }
// demo().then((value)=>{
//     console.log(value);
// })

async function sumit() {
    const weather_bhopal = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('28deg')
        }, 2000);
    })
    const weather_delhi = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('33 deg')
        }, 5000);
    })
    //await - to make the execution wait until fetching the value of a promise
    console.log('fetching bhopal weather...');
    let bhopalW = await weather_bhopal
    console.log('bhopal weather : ' + bhopalW);
    console.log('fetching delhi weather...');
    let delhiW = await weather_delhi
    console.log('delhi weather : ' + delhiW);
    return [bhopalW, delhiW]
}
async function greet() {
    console.log('Thank You');
}
//they run parallely--
// let a = sumit()
// let b = greet()
// a.then((value) => {
//     console.log(value);
// })

//'b' wait until 'a' is completed
async function main() {
    let a = await sumit()
    let b = await greet()
    console.log(a);
}
main()