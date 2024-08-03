const regExp = /very/gi //same word
// const regExp = /.ry/gi //word end with (i is not removing caseSensitive)
// const regExp = /^you/g//line start with
// const regExp = /(very){2}/gi //group 
const text = 'you are a VERY very very smart person'
console.log(text.match(regExp)); 