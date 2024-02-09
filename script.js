const audioArr = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"]
let length = document.querySelectorAll(".drum").length;
for(let i = 0; i<length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerHtml = this.innerHTML;
       makeSound(buttonInnerHtml);
       buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch(key){
        case 'w':
            var tom = new Audio(`sounds/${audioArr[0]}`);
            tom.play();
            break;
        case 'a':
            var tom1 = new Audio(`sounds/${audioArr[1]}`);
            tom1.play();
            break;  
        case 's':
            var tom2 = new Audio(`sounds/${audioArr[2]}`);
            tom2.play();
            break; 
            
        case 'd':
            var tom3 = new Audio(`sounds/${audioArr[3]}`);
            tom3.play();
            break; 
                
        case 'j':
            var tom4 = new Audio(`sounds/${audioArr[4]}`);
            tom4.play();
            break; 

        case 'k':
            var tom5 = new Audio(`sounds/${audioArr[5]}`);
            tom5.play();
            break; 

        case 'l':
            var tom6 = new Audio(`sounds/${audioArr[6]}`);
            tom6.play();
            break; 
    }
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100)
}