//Access child and parent nodes --
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[document.body.childNodes.length - 1]);
// console.log(document.body.firstElementChild.childNodes);
// let arr = Array.from(document.body.childNodes[3].childNodes)
// for(i = 0; i < arr.length; i++){
//     if (i % 2 != 0) arr[i].textContent = 'hey'
// }
// for (i of document.body.childNodes[3].childNodes){
//     console.log(i);
// }

//Previous and next sibling --
// console.log(document.previousSibling);
// console.log(document.nextSibling);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// alert(document.documentElement.parentNode);


//Target element's by different methods ---
// alert(document.documentElement.parentElement);
// console.log(document.querySelector('.table'));
// console.log(document.getElementById('main'));
// console.log(document.querySelectorAll('.box'));
// console.log(document.getElementsByTagName('div'));
// console.log(document.getElementsByName('parent'));


//Attributes and their methods --
// let main = document.getElementById('main')
// let a = main.getAttribute('class')
// console.log(a);
// console.log(main.hasAttribute('class'));
// console.log(main.hasAttribute('style'));

//set and remove attributes --
// main.setAttribute('name', 'wrapper'); // change old attribute if exists
// main.setAttribute('style', 'color:red;');// add new if does not exits and set it's value
// main.removeAttribute('name');//remove if exist
// console.log(main.attributes);

// data-'custom attribute' attributes --
// console.log(main.dataset.speed);
// main.setAttribute('data-scroll-speed','-5')
// console.log(main.dataset.scrollSpeed);//use camel casing where '-' is present

// insertion methods ---
// let div = document.createElement('div')// create element is only method of 'document' object 
// div.className = 'alert'//set class name to alert
// //create element only creates but not add it to body, we need to manually add it
// console.log(div);
// div.innerHTML = `<h1 class="font-bold">Element created by JS</h1>`
// let main = document.getElementById('main')
// main.prepend(div) //inner start
// main.appendChild(div) //inner end
// main.before(div) //before main
// main.after(div) //after main
// main.firstElementChild.replaceWith('box div changed and removed')

// inertion methods
// main.insertAdjacentHTML('beforebegin', '<div class="test font-bold">before begin</div>');
// main.insertAdjacentHTML('beforeend', '<div class="test font-bold">beforeend</div>');
// main.insertAdjacentHTML('afterbegin', '<div class="test font-bold">afterbegin</div>');
// main.insertAdjacentHTML('afterend', '<div class="test font-bold">after end</div>');
// main.remove()


//className and classList methods ***very important ---
// let main = document.getElementById('main')
// main.className// class names
// //classList methods *** important
// main.classList ///class list array
// main.classList.add('added-class')
// main.classList.remove('main-class')
// main.classList.toggle('red') //remove if exist or add if doesn't exist
// main.classList.contains('main-class')//check if present or not
// let button = document.querySelector('button')
// //use case of toggle
// button.addEventListener('click', function () {
//     button.classList.toggle('text-white')
// })
// console.log(button.classList.contains('text-white'));;

// let a = setTimeout(() => {
//     alert('timeout')
// }, 2000);

let add = (...n)=>{
    let sum = 0;
    n.forEach(e =>{
        sum += e
    });
    return console.log(sum);;
}
setTimeout(add, 1000, 3, 3, 3)
setTimeout(add(3,3,3),2000) //or

// setInterval((e) => {
//     console.log('interval');
// }, 1000);
setInterval(add ,1000 , 2,2)
// setTimeout(()=>{clearTimeout(a)},2000)

