
// sessionStorage.setItem(key, value)
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem(item)
// sessionStorage.clear()
//--deleted when the session is over 
// for example - opening in new tab 

window.onstorage = (e) => {
    alert('loaded');
    console.log(e); 
    //is triggered when a change is made to the localStorage or sessionStorage
    //from a different document context (i.e., another tab or window)
}