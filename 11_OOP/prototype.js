console.log('hello');
const a = {
    name: "sumit",
}
const b = {
    branch : 'b.tech'
}
a.__proto__ = b

b.__proto__ = {
    id : 185
}
console.log(b.id);
console.log(b);