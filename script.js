let playingSound = false
let muteSound = false

const action = {
    pause: 'pause',
    play : 'play',
    high: 'high',
    low: 'low'
}



function controlAudio(id, option){
   const element = document.getElementById(id);
   const audio = new Audio('sounds/futuristic-beat-146661.mp3')
   option = playingSound ? action.pause: option;
   
   switch(option){
     case action.play : 
        element.firstElementChild.classList.remove("fa-play"); 
        element.firstElementChild.classList.add("fa-pause"); 
        playingSound = !playingSound;
        audio.play()
     break;
     case action.pause: 
        element.firstElementChild.classList.remove("fa-pause"); 
        element.firstElementChild.classList.add("fa-play");
        playingSound = !playingSound; 
        audio.pause()
     break;
   }
  
}

function controlVolume(id, option){
    const element = document.getElementById(id);

    option = muteSound ? action.high : option;

    switch(option){
      case action.low : 
         element.firstElementChild.classList.remove("fa-volume-high"); 
         element.firstElementChild.classList.add("fa-volume-xmark"); 
         muteSound = true;
      break;
      case action.high: 
         element.firstElementChild.classList.remove("fa-volume-xmark"); 
         element.firstElementChild.classList.add("fa-volume-high");
         muteSound = false; 
      break;
    }
    
 }
 

