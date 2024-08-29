let str = 'this is a random sentence';
let len = str.split(' ').length
let words = str.split(' ')

console.log(`the number of words in the string are ${len} are as follows`);
words.forEach(e=>{
    console.log(e);
})

