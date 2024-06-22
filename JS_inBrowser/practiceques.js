// 1.
// let age = prompt("what's your age ?");
// age = Number.parseInt(age); //string to int conversion
// if (age >= 18) {
//     alert("You can drive");
// }
// else if (age <= 0) alert(`invalid age`);
// else {
//     alert('you cannot drive');
// }

// 2.

// let age = prompt("what's your age ?");
// age = Number.parseInt(age);
// let ask = true; 
// while(ask){
//     ask = confirm('do you want to change your age')
//     if (ask) {
//         age = prompt("Re-enter your age ?")
//     }
// }
// if (age >= 18) alert("You can drive")
// else if (age <= 0) alert(`invalid age`);
// else alert('you cannot drive');

// 3.
// let age = prompt("what's your age ?");
// age = Number.parseInt(age);
// if (age >= 18) {
//     alert("You can drive");
// }
// else if (age < 0) console.error(`invalid age`);
// else {
//     alert('you cannot drive');
// }


// 4.
// let url  = new URL('https://google.com')
// let  num = prompt('Enter int greater than 4 to redirect to google')
// num = Number.parseInt(num)
// // if(num > 4) location.href = url.href

// 5.
let input = prompt('Enter background Color')
document.body.style.backgroundColor = input;