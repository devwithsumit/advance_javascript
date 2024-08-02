
const hoursInput = document.getElementById('hours')
const minutesInput = document.getElementById('minutes')
const setBtn = document.getElementById('setAlarm')
const clearBtn = document.getElementById('clearAlarm')
const clock = document.getElementById('clock')
const alarmMsg =  document.getElementById('alarmMessage')
let alarmTime = null

function updateClock(){
    const now =  new Date()
    let hours = Math.floor(now.getHours()).toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    
    if(alarmTime && now >= alarmTime){
        alarmMsg.textContent = 'Alarm is Ringing'
        alarmSound.play()
        alarmTime  =  null;
    }
    requestAnimationFrame(updateClock);
}

clearBtn.addEventListener('click',()=>{
    alarmTime = null
    alarmMsg.textContent = ''
    alarmSound.pause()
})

setBtn.addEventListener('click',()=>{
    let hours = hoursInput.value
    let minutes = minutesInput.value
    if (hours === '' || minutes == ''){
        alert('Enter valid time')
        return
    }
    alarmTime = new Date();
    alarmTime.setHours(hours)
    alarmTime.setMinutes(minutes)
    alarmTime.setSeconds(0)
    alarmMsg.textContent = `Alarm set for ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
})

setInterval(() => updateClock(), 1000);
updateClock();
