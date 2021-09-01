let fillbar = document.querySelector(".fill");
let currentTime =document.querySelector(".tiempo");

const audio = document.getElementById("audio");
const playPausa = document.getElementById("play");

playPausa.addEventListener("click", () => {
    if(audio.paused ){
        playPausa.querySelector(".pause-btn").classList.toggle("hide");
        playPausa.querySelector(".play-btn").classList.toggle("hide");
        audio.play();
    } else{
        playPausa.querySelector(".pause-btn").classList.toggle("hide");
        playPausa.querySelector(".play-btn").classList.toggle("hide");
        audio.pause();
    }
});

//FUNCION PARA LA BARRA DE REPRODUCCION 

/*audio.addEventListener("timeupdate",function(){
    let position = audio.currentTime /audio.duration;
    fillbar.style.width = position *100 +"%";
});*/

