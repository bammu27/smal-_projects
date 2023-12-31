const list_drum = document.querySelectorAll(".drum");

for (let i = 0; i < list_drum.length; i++) {
  list_drum[i].addEventListener("click", function() {

    var key = this.innerHTML;
    makesound(key)
})
}

function makesound(key){

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      break;
  }







}






document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('keydown', (event) => {
    makesound(event.key)
  });
})