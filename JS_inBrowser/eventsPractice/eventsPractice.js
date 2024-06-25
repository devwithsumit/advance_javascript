//1.
let button = document.querySelectorAll('.button')
button.forEach(e => {
    let color_class = e.classList[0]
    e.onclick = () => {
        alert(`${color_class == 'red' ? 'Red' : color_class == 'green' ? 'Green' : 'Blue'} button is clicked`)
    }
})

// 2. and 3.
const bookmarks = document.querySelectorAll("li")

Array.from(bookmarks).forEach(e => {
    e.onclick = function () {
        if (e.classList.contains('chatgpt')) {
            window.location = 'https://chatgpt.com/'
        }
        if (e.classList.contains('github')) {
            window.location = 'https://github.com/webwithsumit?tab=repositories'
        }
        if (e.classList.contains('tailwindcss')) {
            window.location = 'https://tailwindcss.com/docs/installation'
        }
    }
})


// 4. fetch content each time interval
const fetchContent = async(url)=>{
    con = await fetch(url);
    let a = await con.json()
    return a;
}
const a = setInterval(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log(await fetchContent(url));
}, 2000);
setTimeout(() => clearInterval(a), 10000)


// 5.
function toggleClasses(element, ...classNames) {
    classNames.forEach(e => {
        element.classList.toggle(e)
    })
}
const bulb = document.querySelector('.circle')
const bulb_button = document.querySelector('.bulb-button')
console.log();
bulb_button.onclick = () => {
    //button method
    // if (bulb_button.classList.contains('.bg-green-500')){
    //     bulb_button.classList.remove('bg-green-500')
    //     bulb_button.classList.add('bg-red-500')
    //     bulb_button.textContent = 'turn off'
    // }
    // else{
    //     bulb_button.classList.add('bg-green-500')
    //     bulb_button.classList.remove('bg-red-500')
    //     bulb_button.textContent = 'turn on'
    // }
    // or with toggle method
    //toggling button clasess
    toggleClasses(bulb_button, 'bg-green-500', 'bg-red-500')
    bulb_button.textContent = bulb_button.classList.contains('bg-green-500') ? 'turn on' : 'turn off'

    //toggling bulb classes
    toggleClasses(bulb, 'bg-yellow-400', 'border-[1.5px]', 'shadow-[0px_0px_20px_10px_rgba(255,223,0,0.85)]')
}

