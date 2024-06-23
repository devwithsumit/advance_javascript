//matches() check is class is exits or not
let id = document.querySelector('#main')
console.log(id.matches('.main-class'));

//closest()
let id1 = document.querySelector('#id1')
console.log(id1.closest('#id1')); //returns nearest  parent

//contains() checks if element is same or is present inside or not
// # input is variable
console.log(id.contains(id1));