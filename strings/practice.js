// console.log("sum\"".length);

//1. startwith and endWith function of strings
// let s1 = 'sumit'
// console.log(s1.startsWith('s'));
// console.log(s1.endsWith('t'));
// console.log(s1.padEnd(7,'x'));// minimum 7 characters add 's' at end i less
// console.log(s1.padStart(7, 'x'));//minimum 7 characters add 's' at start i less

//2. extract 1000 from below string
let s2 = 'please give me ₹ 1000'
search = '1000';
index = s2.indexOf(search)
console.log(s2.slice(index));
//or
console.log(s2.substring(17));
// or 
money = s2.slice('please give me ₹ '.length)
console.log(money);

// 3. try to change 4th character of a given string !
//Ans ; - no , can't change directly
// let s1  = 'given string'
// s1[4] = 'd'
// console.log(s1[4]);

// 4.ternary operator
// const sent = 'the quick brown fox jumps over the lazy dog'
// const find = 'dog';
// console.log(`the ${find} ${sent.includes(find) ? 'is':'is not'} present`);