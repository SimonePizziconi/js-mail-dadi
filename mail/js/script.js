// Prendi l'input da html
let emailUser = document.querySelector("input");
console.log(emailUser);

// Prendi il bottone da html
let button = document.querySelector("button");
console.log(button);

// crea una lista di chi può accedere
const emailList = ["simone@gmail.com", "mario@gmail.com", "marco@gmail.com", "silvia@gmail.com"];
console.log(emailList);

for (let i = 0; i < emailList.length; i++){

    let emailAccess = emailList[i];
    console.log(emailList[i]);

    button.addEventListener("click",
        function (){

            // Chiedi all'utente l'email
            let emailInput = emailUser.value;
            console.log(emailInput);
    
            if (emailInput === emailAccess) {
                // stampa un messaggio appropriato sull’esito del controllo.
                console.log("PUOI ACCEDERE");
            }
        }
    )
}