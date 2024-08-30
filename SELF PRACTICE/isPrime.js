function isprime(x){
    if(x <= 1) return false;
    let b = Math.floor(Math.sqrt(x));
    while (b > 1) {
        if (x % b === 0) {
            return false;
        }
        b--;
    }
    return true;
}
let a = 7;
console.log(isprime(a));
