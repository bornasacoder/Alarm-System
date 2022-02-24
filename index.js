console.log("welcome to alarm project ");

let setalarm = document.getElementById('alarmsubmit');
setalarm.addEventListener('click', makealarm);
function ringbell(){
  var audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
  audio.play();
  }
function makealarm(e){
    
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmdate = new Date(alarm.value);

    console.log(`set alarm ${alarmdate} ...`);
    now  = new Date();
    let timetoalarm = alarmdate - now ;
    console.log(timetoalarm);
    if(timetoalarm>=0){
        setTimeout(() => {
           console.log("ringing now");
           ringbell(); 
        },timetoalarm);
    }
}