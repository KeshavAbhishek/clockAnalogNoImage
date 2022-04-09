var changeTheme = "DAY";

document.getElementById('themeFrame').addEventListener('click',()=>{
    if(changeTheme=="DAY"){
        document.querySelector('#themeFrame div').classList.add('moveY');
        document.querySelector('#themeFrame div').classList.remove('moveYOpp');
        document.getElementById('container').classList.add('changeMainBg');
        document.getElementById('container').classList.remove('changeMainBgBack');
        document.getElementById('digitalClock').classList.add('digitalClockChange');
        changeTheme = "NIGHT";
    }
    else{
        document.querySelector('#themeFrame div').classList.remove('moveY');
        document.querySelector('#themeFrame div').classList.add('moveYOpp');
        document.getElementById('container').classList.remove('changeMainBg');
        document.getElementById('container').classList.add('changeMainBgBack');
        document.getElementById('digitalClock').classList.remove('digitalClockChange');
        changeTheme = "DAY";
    }
});