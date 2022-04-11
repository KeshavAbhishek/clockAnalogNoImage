if(window.innerWidth<=700){
    document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.75)}')`;
}
else{
    document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.35)}')`;
};

window.addEventListener('resize',()=>{
    if(window.innerWidth<=699){
        document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.75)}')`;
    }
    else{
        document.getElementById('circularFrame').style.backgroundImage=`url('https://picsum.photos/${parseInt(window.innerWidth*0.35)}')`;
    };
});