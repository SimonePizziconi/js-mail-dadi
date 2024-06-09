// Genera un numero random da 1 a 6 per te e per il computer
let myNumber = Math.floor(Math.random() * 6) + 1;
let pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(myNumber, pcNumber);

// Crea Un messaggio per il risultato
let textResult = document.getElementById("result-text");

// all "click" del bottone lanciare i dadi
const diceButton = document.getElementById("button-dice");
const myDice = document.getElementById("my-dice");
const pcDice = document.getElementById("pc-dice");

diceButton.addEventListener("click",
    function(){
        myDice.classList.add("rolling");
        myDice.innerHTML = myNumber;

        pcDice.classList.add("rolling");
        pcDice.innerHTML = pcNumber;

        // fai vincere il numero più grande
        if(myNumber > pcNumber){
            textResult.innerHTML = "HAI VINTO!!!"
            console.log("Hai vinto");

        }   else if(myNumber < pcNumber){
            textResult.innerHTML = "HAI PERSO!!!"
            console.log("Hai perso");

        }   else{
            textResult.innerHTML = "PAREGGIO"
            console.log("Hai pareggiato");
        }
    }
)