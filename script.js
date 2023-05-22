let playingSound = false
let muteSound = false

const action = {
    pause: 'pause',
    play : 'play',
    high: 'high',
    low: 'low'
}

const audio = new Audio("sounds/futuristic-beat-146661.mp3")


function controlAudio(id, option){
   const element = document.getElementById(id); 
   option = playingSound ? action.pause: option;
   
   switch(option){
     case action.play : 
        let lista = document.getElementsByClassName("fa-pause")

        for(let item of lista){
            item.classList.remove("fa-pause"); 
            item.classList.add("fa-play")
        }

        element.firstElementChild.classList.remove("fa-play"); 
        element.firstElementChild.classList.add("fa-pause"); 
        playingSound = !playingSound;

        if(id == 1){
            audio.src = "sounds/break.mp3"
        }
        else if(id == 2){
            audio.src = "sounds/futuristic-beat-146661.mp3"
        }
        else if(id == 3){
            audio.src = "sounds/modern-vlog-140795.mp3"
        }
        else if(id == 4){
            audio.src = "sounds/relaxing-145038.mp3"
        }

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

function controlMuted(id, option){
    const element = document.getElementById(id);

    option = muteSound ? action.high : option;

    switch(option){
      case action.low : 
         element.firstElementChild.classList.remove("fa-volume-high"); 
         element.firstElementChild.classList.add("fa-volume-xmark"); 
         audio.muted = true;
         muteSound = true;
      break;
      case action.high: 
         element.firstElementChild.classList.remove("fa-volume-xmark"); 
         element.firstElementChild.classList.add("fa-volume-high");
         audio.muted = false;
         muteSound = false; 
      break;
    }
    
 }
 
// function controlVoume(){
// audio.volume = 1
// }

