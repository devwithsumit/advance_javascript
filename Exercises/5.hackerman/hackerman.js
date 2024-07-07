async function hack(a) {
    const start = 'Initialising hack sequence...'
    let username = a
    const search = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('searching for ' + username)
        }, 4000);
    })
    const found = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username + ' found!')
        }, 3000);
    })
    const connect = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('logging into the account, Bypassing security...')
        }, 1000);
    })
    const done = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('congratulations logged in succesfully! the password is logged into your console')
            return console.log('apke papa ne bhi kiya h kabhi hack ?');
        }, 4000);
    })
    let outputDiv = document.getElementById('output')

    async function addMessage(message) {
        const messageElement = document.createElement('p');
        messageElement.className = 'mb-2';
        messageElement.innerHTML = `Hackerman@system:~$ <span class="font-semibold text-sm">${message}</span>`;
        outputDiv.appendChild(messageElement);
        gsap.to(outputDiv, {
            scrollTo: { y: outputDiv.scrollHeight },
            duration: 0.5,
            ease: "power1.inOut"
        });
    }
    function generateRandomCharacters(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    // function displayRandomCharacters() {
    //     return new Promise((resolve) => {
    //         let charCount = 0;
    //         const interval = setInterval(() => {
    //             if (charCount < 1000) { // Adjust the number of characters to display
    //                 const randomChars = generateRandomCharacters(1000); // Adjust the length of each random string
    //                 const messageElement = document.createElement('p');
    //                 messageElement.className = 'mb-2 text-wrap';
    //                 messageElement.innerHTML = `Hackerman@system:~$ <span class="font-semibold text-sm">${randomChars}</span>`;
    //                 outputDiv.appendChild(messageElement);
    //                 gsap.to(outputDiv, {
    //                     scrollTo: { y: outputDiv.scrollHeight },
    //                     duration: 0.1,
    //                     ease: "power1.inOut"
    //                 });
    //                 charCount += randomChars.length;
    //             } else {
    //                 clearInterval(interval);
    //                 resolve();
    //             }
    //         }, 100); // Adjust the speed of random character display
    //     });
    // }

    document.getElementById('userInput').innerHTML = `<p class="mb-2 whitespace-nowrap">Hackerman@system:~$</p>`
    
    await addMessage(start);
    let s = await search();
    await addMessage(s);
    let f = await found();
    await addMessage(f);
    let c = await connect();
    await addMessage(c);
    // await displayRandomCharacters();
    let d = await done();
    await addMessage(d);
    document.getElementById('userInput').innerHTML = `<p class="mb-2 whitespace-nowrap">Hackerman@system:~$ <input type="text" class="input bg-transparent text-[#e8e8e8] placeholder:text-[#e8e8e8] text-[#00ff00] outline-none w-full" placeholder="Enter command..."></p>`
}

function terminal() {
    const userInput = document.getElementById('userInput')
    userInput.addEventListener('keypress', function (e) {
        const outputDiv = document.getElementById('output')
        if (e.key === 'Enter') {
            const input = e.target.value
            // console.log(input)
            e.target.value = '';

            let responseText = '';
            if (input.toLowerCase().includes('hack @')) {
                const username = input.split('@')[1].trim();
                // console.log(username);
                hack(username);
            } else {
                switch (input.toLowerCase()) {
                    case 'version':
                        responseText = "Hackerman Terminal v1.0.0";
                        break;
                    case 'features':
                        responseText = "Features:<br>1. Version info <br> 2. List features <br> 3. Hack username <br> 4. Display help <br> 5. Show current user <br> 6. Show current date and time <br> 7. Clear terminal";
                        break;
                    case 'hack':
                        responseText = `'hack' not recognised please provide with @username`
                        break;
                    case 'help':
                        responseText = "Available commands: version, features, hack @username, help, date, time, clear";
                        break;
                    case 'time':
                        responseText = new Date().toLocaleTimeString();
                        break;
                    case 'date':
                        responseText = new Date().toDateString();
                        break;
                    case 'clear':
                        outputDiv.innerHTML = '';
                        break;
                    default:
                        responseText = `Command '${input}' not recognized. Type 'help' for a list of commands.`;
                }
                if (input.toLowerCase() !== 'clear') {
                    const response = document.createElement('p');
                    response.innerHTML = `Hackerman@system:~$ <span class="font-semibold text-sm">${responseText}</span>`;
                    outputDiv.appendChild(response);
                }
                // gsap.to(outputDiv, {
                //     y: -outputDiv.scrollHeight + outputDiv.scrollHeight/2,
                //     duration: 0.5,
                //     ease: "power1.inOut"
                // });
                // gsap.to(userInput,{
                //     y: -outputDiv.scrollHeight + outputDiv.scrollHeight / 2,
                //     duration: 0.5,
                //     ease: "power1.inOut"
                // });
            }
        }
    });
}
terminal();