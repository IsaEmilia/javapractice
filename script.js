const guessInput = document.querySelector(".guessInput");
const input = document.getElementById("name");
const attempt = document.getElementById("fails");
const succes = document.getElementById("answer");
const button = document.getElementById("button");

let randomNum = Math.floor(Math.random() *101);
console.log(randomNum);


 function guessNum(event){
     event.preventDefault()
    
    const guess = input.value 

   
    if(guess == randomNum) {
        succes.innerHTML += ` ${guess} `;
        button.innerHTML = "VICTORY!"
        button.disabled = true;
    }else if(guess >= randomNum) {
        attempt.innerHTML += ` ${guess} `;
        button.innerHTML = "lower!"
    }else if( guess <= randomNum) {
        attempt.innerHTML += ` ${guess} `;
        button.innerHTML = "higher!"
    }
}



button.addEventListener("click", guessNum);
guessInput.addEventListener("submit", guessNum);