const clock = document.getElementById('clock')
let format = 24;
function updateTime() {
    let date = new Date;
    let hours = (date.getHours());
    let minutes = date.getMinutes().toString().padStart(2, '0')
    let seconds = date.getSeconds().toString().padStart(2, '0')
    if (format === 12) {
        const amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        clock.innerHTML = `<h1>${(hours.toString().padStart(2, '0')).toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} ${amPm}</h1>`
    }
    else clock.innerHTML = `<h1>${(hours.toString().padStart(2, '0')).toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}</h1>`
}
document.getElementById('toggleFormat').addEventListener('click', function () {
    format = format === 24 ? 12 : 24;
    gsap.fromTo('.alert', 
        { top: '-50%'}, 
        { top: '0%', duration: 0.3, ease: 'power2.out' });
    setTimeout(() => {
        gsap.to('.alert',{ top: '-50%', duration: 0.5, ease: 'power2.in'});
    }, 1500);
    document.querySelector('.alert').textContent = (`${format} hours format`);
    updateTime()
})
setInterval(updateTime, 1000)
updateTime()

