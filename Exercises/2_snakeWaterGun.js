function snakeWaterGun() {
    let user_score = 0,comp_score = 0;
    let user;
    console.log("s for snake,\nw for water,\ng for gun,\npress any other key to exit");
    // if (user !== 's' || user !== 'w' || user !== 'g'){
    //     let ask  = confirm('are you sure you wan\'t to quit?')
    // }
    while (true) {
        const choices = ['snake', 'water', 'gun'];
        const comp = choices[Math.floor(Math.random() * choices.length)];
        const userInput = prompt('Enter your move:');

        function convert(userInput){
            if (userInput === 's') {
                return 'snake';
            } else if (userInput === 'w') {
                return 'water';
            } else if (userInput === 'g') {
                return 'gun';
            } else {
                if (confirm('are you sure you wan\'t to quit')) {
                    return 'quit';
                }
                else {
                    userInput = prompt('Enter your move:')
                    return convert(userInput)
                }
            }
        }
        input = convert(userInput)
        if(input === 'quit') break;

        console.log('You:', input);
        console.log('Comp:', comp);

        function check(comp, input) {
            if (comp === input) {
                console.log('draw ⚪️')
            }
            else if ((comp === 'snake' && input === 'gun') ||
                (comp === 'water' && input === 'snake') ||
                (comp === 'gun' && input === 'water')) {
                comp_score++;
                console.log('Your lost 🔴');
            }
            else {
                user_score++;
                console.log('You won 🟢');
            }
        }
        check(comp, input);
    }
    console.log(`
    your score = ${user_score} 
    comp score = ${comp_score}
    ${user_score > comp_score ? 'you won 🏆' : user_score == comp_score ? 'draw 🤝' : 'you lost 👎🏻\nbetter luck next time!'}`);
}

snakeWaterGun();
