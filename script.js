$(document).ready(function () {
    $('.anchor').hide();
    $('.fa-bars').css("margin-right","25vh");

    $('.fa-bars').click(function () {
        $('.anchor').toggle(1000);
        $('.fa-bars').css({"margin-left":"5vh"});
    });

// ONLOAD IMAGE---------------------------------------------------------------------
//   alert("the body has loaded");
window.onload = function(){
    //display loader on page load 
    $('.loader').fadeOut();
}
 //END ONLOAD IMAGE---------------------------------------------------------------------

// FOR BEEP SOUND------------------------------------------------------------------------
const audio = new Audio('https://www.soundjay.com/buttons/beep-08b.mp3');
const button = document.querySelector('i')
const button1 = document.querySelector('nav')
const button2 = document.querySelector('h1')

button.addEventListener('click',()=>{
    audio.play();
});

button1.addEventListener('click',()=>{
    audio.play();
});

button2.addEventListener('click',()=>{
    audio.play();
});
//END BEEP----------------------------------------------------------------------------------

//follow cursor on mousemove----------------------------------------------------------------
const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //cursor effects when mouse stopped--------------------------------------------------------
  function mouseStopped(){
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 8000);
});

  //cursor effects when mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "block";
});
//CURSOR END---------------------------------------------------------------------------------
});




