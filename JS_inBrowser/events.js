// MOUSE EVENTS -- click , contextmenu(right click),
// mouseover/mouseout, mousedown/mouseup, mousemove
document.addEventListener('click', function () {
    console.log('clicked');
})
document.onmousemove = function(){
    console.log('moving')
}
//KEY EVENTS - keydown and keyup (** any keyboard key)
document.addEventListener('keydown', function () {
    console.log('pressed');
})
//FORM ELEMENT EVENTS - submit and focus
document.addEventListener('focus', function () {
    console.log('focus');
})
document.addEventListener('submit', function () {
    console.log('submit');
})

// Document events - DOMContentLoaded (when full dom is loaded)
document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded');
})
console.log('loading');