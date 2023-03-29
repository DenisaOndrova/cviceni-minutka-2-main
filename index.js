
const startBtn = document.querySelector('.submitBtn');


const updateClock = (value) => {
    const alarmSec = document.querySelector('.alarm__seconds');
    alarmSec.textContent = value;
    
    let countdown = setInterval(() => {
      value--;
      alarmSec.textContent = value;
  
      if (value === 0) {
        clearInterval(countdown);
        const audio = new Audio('assets/alarm.mp3');
        audio.play();
        alert('Time is up!');
      }
    }, 1000);
  }
  

startBtn.addEventListener('click',(event) => {
    event.preventDefault()
    let value = Number(document.querySelector('.time-input').value);
   updateClock(value)
 
})





console.log('funguju!');
