// setInterval(() => {
//     var currTime = new Date();
//     currentTicks = Math.floor(currTime.getMinutes()/12);
//     if(currTime.getHours()>12){
//         document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${(((currTime.getHours()-12)/12)*360)+(currentTicks)*6}deg)`;
//         document.getElementById('hourHand').style.transition='all 1s ease-in-out';
//     }
//     else{
//         document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${((currTime.getHours()/12)*360)+(currentTicks)*6}deg)`;
//         document.getElementById('hourHand').style.transition='all 1s ease-in-out';
//     }

//     document.getElementById('minuteHand').style.transform=`rotate(-90deg) rotate(${(currTime.getMinutes()/60)*360}deg)`;
//     document.getElementById('minuteHand').style.transition='all 1s ease-in-out';

//     document.getElementById('secondHand').style.transform=`rotate(-90deg) rotate(${(currTime.getSeconds()/60)*360}deg)`;

//     document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`${currTime.toTimeString().split(' ')[0].split(':')[0]}`;
//     document.querySelector('#digitalClock span:nth-child(2)').innerHTML=`${currTime.toTimeString().split(' ')[0].split(':')[1]}`;
//     document.querySelector('#digitalClock span:nth-child(3)').innerHTML=`${currTime.toTimeString().split(' ')[0].split(':')[2]}`;

//     if(currTime<=11){
//         document.querySelector('#digitalClock span:nth-child(4)').innerHTML='AM';
//     }
//     else{
//         document.querySelector('#digitalClock span:nth-child(4)').innerHTML='PM';
//     }
// }, 1000);