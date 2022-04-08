setInterval(() => {
    var currTime = new Date()
    currentTicks = Math.floor(currTime.getMinutes()/12);
    if(currTime.getHours()>12){
        document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${(((currTime.getHours()-12)/12)*360)+(currentTicks)*6}deg)`;
        document.getElementById('hourHand').style.transition='all 1s ease-in-out';

        if(currTime.getHours()-12<10){
            document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`0${currTime.getHours()-12}`;
        }
        else{
            document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`${currTime.getHours()-12}`;
        }
        // document.querySelector('#digitalClock span:nth-child(4)').innerHTML='PM';
    }
    else{
        document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${((currTime.getHours()/12)*360)+(currentTicks)*6}deg)`;
        document.getElementById('hourHand').style.transition='all 1s ease-in-out';

        if(currTime.getHours()<10){
            if(currTime.getHours()===0){
                document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`12`;
            }
            else{
                document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`0${currTime.getHours()}`;
            }
        }
        else{
            document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`${currTime.getHours()}`;
        }
        document.querySelector('#digitalClock span:nth-child(4)').innerHTML='AM';
    }
    if(currTime.getHours()>=12){document.querySelector('#digitalClock span:nth-child(4)').innerHTML='PM';}

    document.getElementById('minuteHand').style.transform=`rotate(-90deg) rotate(${(currTime.getMinutes()/60)*360}deg)`;
    document.getElementById('minuteHand').style.transition='all 1s ease-in-out';

    document.getElementById('secondHand').style.transform=`rotate(-90deg) rotate(${(currTime.getSeconds()/60)*360}deg)`;

    if(currTime.getSeconds()<10){
        document.querySelector('#digitalClock span:nth-child(3)').innerHTML=`0${currTime.getSeconds()}`;
    }
    else{
        document.querySelector('#digitalClock span:nth-child(3)').innerHTML=`${currTime.getSeconds()}`;
    }

    if(currTime.getMinutes()<10){
        document.querySelector('#digitalClock span:nth-child(2)').innerHTML=`0${currTime.getMinutes()}`;
    }
    else{
        document.querySelector('#digitalClock span:nth-child(2)').innerHTML=`${currTime.getMinutes()}`;
    }
}, 1000);