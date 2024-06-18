//1.create a string data type and add number to it
// let a = 'sumit';
// let b = 2410;
// console.log(a + b);
// console.log(typeof (a + b)); //b converted to string automatically

//2.create const object , can you change its value to a number later
// const c = {
//     name : 'sumit'
// }
// console.log(c);
// c = 5; //error

//3. try to add new key to the const object..
const c = {
    name : 'sumit'
}
c['id'] = 185; //new key pair adding support
c.branch  = 'IT'
console.log(c);

c['name'] = 'aaloo' //value changeable
c.branch = 'cse'
console.log(c);

//4.word-meaning dictonary of 5 words
// const dict = {
//     Sesquipedalian: 'Characterized by long words',
//     coadventure: 'to share in an adventure',
//     abrogate: 'to put aside; put an end to.',
//     venerable: 'commanding respect because of great age or impressive dignity.',
//     dulcify : 'to sweeten'
// }
// console.log(dict);
