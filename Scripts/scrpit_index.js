var i = 0;
var txt = "Hi there, I'm";
var speed = 175;

window.onload = function typeEffect() {
  if (i < txt.length) {
    document.getElementById("hi").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}