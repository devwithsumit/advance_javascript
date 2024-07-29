console.log(document.cookie);
document.cookie = 'id1=sumit'
document.cookie = 'id2=sumit'
let key = prompt('enter your name')
let value = prompt('enter your name')
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);