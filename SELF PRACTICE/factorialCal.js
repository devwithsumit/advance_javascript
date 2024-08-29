function factorial(a){
    if(a === 1) return 1;
    return a * factorial((a - 1))
}
const a = factorial(5)
console.log(a);
