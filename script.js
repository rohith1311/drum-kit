var noofbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<noofbuttons;i++){
document.querySelectorAll(".drum")[i].addEventListener('click',function (){
   var typeofbutton= this.innerHTML;
  makesound(typeofbutton);  
  addanimation(typeofbutton); 
});
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    addanimation(event.key);
});
function makesound(value){
    switch(value){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
 
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        
        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        
        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        
        case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
        
        case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        
        case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        
        default:
        alert("not a valid response");
        break;
    }
}
function addanimation(value){
var anielement=document.querySelector("."+value);
anielement.classList.add("game-over");
setTimeout(function(){
    anielement.classList.remove("game-over"),100
},100);
}
