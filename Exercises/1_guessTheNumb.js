//Make a guessing the number game is tells you whether number is greater
// equal or smaller than the corect number

let random_numb = Math.floor(Math.random() * 100)
let score = 100;
//console.log(random_numb);
let chances = 10
for (i = 0; i < 10; i++) {
    score -= 5;
    chances--
    let guess = prompt('Guess the number between 0 to 100')
    if (guess == random_numb) break;
    else if (guess < random_numb) {
        console.log(`Correct number is greater than ${guess}`);
        console.log(`chances left ${chances}`);
    }
    else {
        console.log(`Correct number is smaller than ${guess}`);
        console.log(`chances left ${chances}`);
    }
}
console.log(`Yes the correct number is ${random_numb}`);
console.log(`Your score is ${score} out of 100`);
