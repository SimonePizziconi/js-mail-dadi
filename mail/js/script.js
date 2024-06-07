// Prendi l'input da html
let emailUser = document.querySelector("input");
console.log(emailUser);

// Prendi il bottone da html
let button = document.querySelector("button");
console.log(button);

// chiedi all'utente l'email
button.addEventListener("click",
    function (){
        
        let emailInput = emailUser.value;
        console.log(emailInput);

    }
)




// controlla che sia nella lista di chi può accedere,
const emailList = ["simone@gmail.com", "mario@gmail.com", "marco@gmail.com", "silvia@gmail.com"];
console.log(emailList);

// stampa un messaggio appropriato sull’esito del controllo.