var timeStamps = {0:"time12",1:"time1",2:"time2",3:"time3",4:"time4",5:"time5",6:"time6",7:"time7",8:"time8",9:"time9",10:"time10",11:"time11",12:"time12"};


setInterval(() => {
    var currTime = new Date();
    currentTicks = Math.floor(currTime.getMinutes()/12);
    if(currTime.getHours()>12){
        document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${(((currTime.getHours()-12)/12)*360)+(currentTicks)*6}deg)`;
        document.getElementById('hourHand').style.transition='all 1s ease-in-out';
    }
    else{
        document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${((currTime.getHours()/12)*360)+(currentTicks)*6}deg)`;
        document.getElementById('hourHand').style.transition='all 1s ease-in-out';
    }

    document.getElementById('minuteHand').style.transform=`rotate(-90deg) rotate(${(currTime.getMinutes()/60)*360}deg)`;
    document.getElementById('minuteHand').style.transition='all 1s ease-in-out';

    document.getElementById('secondHand').style.transform=`rotate(-90deg) rotate(${(currTime.getSeconds()/60)*360}deg)`;

    if(currTime.getHours()>12){
        document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`${currTime.getHours()-12}`;
        document.getElementById(timeStamps[currTime.getHours()-12-1]).classList.remove('hourHandOn');
        document.getElementById(timeStamps[currTime.getHours()-12]).classList.add('hourHandOn');
    }
    else{
        if(currTime.getHours()<10){
            document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`0${currTime.getHours()}`;
            // document.getElementById(timeStamps[currTime.getHours()-1]).classList.remove('hourHandOn');
            // document.getElementById(timeStamps[currTime.getHours()]).classList.add('hourHandOn');
            if(currTime.getHours()>=1){
                document.getElementById(timeStamps[currTime.getHours()-1]).classList.remove('hourHandOn');
                document.getElementById(timeStamps[currTime.getHours()]).classList.add('hourHandOn');
            }
            if(currTime.getHours()==0){
                document.querySelector('#digitalClock span:nth-child(1)').innerHTML='12';
                document.getElementById(timeStamps[11]).classList.remove('hourHandOn');
                document.getElementById(timeStamps[12]).classList.add('hourHandOn');
            }
        }
        else{
        document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`${currTime.getHours()}`;
        document.getElementById(timeStamps[currTime.getHours()-1]).classList.remove('hourHandOn');
        document.getElementById(timeStamps[currTime.getHours()]).classList.add('hourHandOn');
        }
    }

    // document.querySelector('#digitalClock span:nth-child(1)').innerHTML=`${currTime.toTimeString().split(' ')[0].split(':')[0]}`;
    document.querySelector('#digitalClock span:nth-child(2)').innerHTML=`${currTime.toTimeString().split(' ')[0].split(':')[1]}`;
    document.querySelector('#digitalClock span:nth-child(3)').innerHTML=`${currTime.toTimeString().split(' ')[0].split(':')[2]}`;

    if(currTime.getHours()>=12){
        document.querySelector('#digitalClock span:nth-child(4)').innerHTML='PM';
    }
    else{
        document.querySelector('#digitalClock span:nth-child(4)').innerHTML='AM';
    }
}, 1000);

// time12
// time6
// time9
// time3
// time10
// time4
// time11
// time5
// time7
// time1
// time8
// time2