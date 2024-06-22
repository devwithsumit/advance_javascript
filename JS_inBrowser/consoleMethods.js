const a = [1, 2, 3];
console.log(a);
console.info('info')
console.warn('warn')
console.table(a)
console.error('User created error')
console.log("continue");
console.assert(5 > 10) //assertion failed
console.assert(5 < 10)//no error

console.time('while loop')
let b = 0
while(b < 500){
    console.log(1);
    b++
}
console.timeEnd('while loop')
console.time('for loop')
for(i = 0; i<500;i++){
    console.log(1);
}
console.timeEnd('for loop')