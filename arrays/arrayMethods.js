let arr = [1,2,5,7,8]
console.log(arr);
//join('')
let c = arr.join('-')
console.log(c);

//pop()
console.log('👇🏻 poped element');
console.log(arr.pop());//remove last elem
console.log('👇🏻this is poped array');
console.log(arr);

//push()
arr.push(11);//insert last elem
console.log('👇🏻this is pushed array');
console.log(arr);

//shift()
console.log('👇🏻 pushed element');
console.log(arr.shift());//remove first elem
console.log('👇🏻this is shifted array');
console.log(arr);

// unshift()
arr.unshift(0);//insert first elem
console.log('👇🏻this is unshifted array');
console.log(arr);

//delete - length not affected deleted elem's
//position is filled with empty value
delete arr[3];
console.log('👇🏻this is deleted array');
console.log(arr);
arr[3] = 3;

//concat - return new array not existing array
let brr = [3,2]
let crr = [4,6]
let jointarr = arr.concat(brr, crr)
console.log('👇🏻this is concated array');
console.log(jointarr);

//sort() alphabetically (if number 11 is there it's 0th
// position will be considered for sorting)
function compare(a,b){
    return a - b //sorting in ascending order
}
jointarr.sort(compare)
arr.sort()
console.log('👇🏻these are sorted arrays');
console.log(arr, jointarr);

//splice()
const numbs = [1,2,3,4,5]
console.log('👇🏻return of splice');
console.log(numbs.splice(1, 2, 22, 33));;//1 - position , 0 - no. of elem to remove , 22,33 - elem to be added
console.log('👇🏻this is spliced array');
console.log(numbs);

// slice - new array
const a = [1,2,4,5,6]
let b = a.slice(2)
console.log('👇🏻this is sliced array');
console.log(b);

//reverse()
numbs.reverse()
console.log('👇🏻this is reversed array');
console.log(numbs);