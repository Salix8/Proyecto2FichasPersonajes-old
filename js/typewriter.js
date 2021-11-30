
window.addEventListener(`load`, ()=>{
    setTimeout(typeWriter(), 5000);
});

var i = 0;
var txt = `Fichas de personajes`;
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById(`auto_title`).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}