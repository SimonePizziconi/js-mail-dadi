// Genera un numero random da 1 a 6 per te e per il computer
let myNumber = Math.floor(Math.random() * 6) + 1;
let pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(myNumber, pcNumber);

// fai vincere il numero più grande
if(myNumber > pcNumber){
    console.log("Hai vinto");

}   else if(myNumber < pcNumber){
    console.log("Hai perso");

}   else{
    console.log("Hai pareggiato");
}
