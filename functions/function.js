//Function to calculate the average
// function avg(a,b){
//     console.log(`Done ✅`);
//     return (a + b)/2;
// }
// let a = 1 , b = 10;
// console.log(`average is ${avg(a, b)}`);


function setDuration(duration){
    let d = duration, hours, minutes, seconds;
    function updateClock() {
        hours = Math.floor(d / 3600 % 24).toString().padStart(2,0)
        minutes = Math.floor(d / 60 % 60).toString().padStart(2, 0)
        seconds = Math.floor(d % 60).toString().padStart(2, 0)
        if (--d <= 0){
            clearInterval(interval1);
        }
        console.log(`${hours} : ${minutes} : ${seconds}`)
    }
    interval1 = setInterval(updateClock, 1000)
}
setDuration(120)
