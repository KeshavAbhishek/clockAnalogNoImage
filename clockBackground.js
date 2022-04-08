if(window.innerWidth<=700){
    document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.7)}')`;
}
else{
    document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.3)}')`;
}

window.addEventListener('resize',()=>{
    if(window.innerWidth<=699){
        document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.7)}')`;
    }
    else{
        document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.3)}')`;
    }
})