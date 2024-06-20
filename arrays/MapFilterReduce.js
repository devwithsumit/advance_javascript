function fact(a){
    if(a == 1){
        return 1
    }
    return a * fact(a - 1)
}

const arr = [1,2,4,5,5,4,1]
//map(): -
// makes a new array by performing some operation
// on each element of an array
const brr = arr.map(function(e,i,array){
    console.log(i,e,array);
    return e * 10
    // or value with operation
    return e * 10
    return fact(e)
})
console.log(brr);

// filter() - makes new array with filtered elements
const crr = arr.filter(function(e){
    return e > 2
})
console.log(crr);

//reduce() - 
const xrr = arr.reduce(function(result , next_elem){
    console.log(result+ '+'+ next_elem+' = '+ (result+next_elem));
    return result + next_elem
})
console.log(xrr);