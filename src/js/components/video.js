const video = document.getElementById("myVideo");

if(document.querySelector(".main__caption-play")){
  document.querySelector(".main__caption-play").addEventListener('click', () => {
    if(video.paused){
      document.querySelector(".main__caption-play").style.opacity = 0;
      video.play()
    }
  })
}


