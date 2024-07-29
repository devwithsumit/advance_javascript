console.log('hefasbhf');
//localeStorage
// setItem('key', 'value')
let key = prompt('enter key you want to set')
let value = prompt('enter value you want to set')
console.log(typeof key);
if (key != 0 || key != 1) {
    localStorage.setItem(key, value)
    console.log(`${key}: ${value}`)
}

//getItem(key)
console.log(localStorage.getItem('name'));

//removeItem(key)
console.log();
let index = localStorage.length - 1
let item = localStorage.key(index);
console.log(item);
if (key == 1) {
    localStorage.removeItem(item)
}

//clear()
if (key == 0) {
    localStorage.clear()
}

