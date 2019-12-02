const guessInput = document.querySelector(".guessInput");
const input = document.getElementById("name");
const attempt = document.querySelector(".attempts");
const succes = document.querySelector(".succes");

let randomNum = Math.floor(Math.random() *101);
console.log(randomNum);


 function guessNum(event){
     event.preventDefault()
console.log(input.value)
    console.log("hello")
}


function correct(){

}





guessInput.addEventListener("submit", guessNum);