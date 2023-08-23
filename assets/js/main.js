/* 

DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

*/

console.log('hello world')

//chiedere numero chilometri e età

const userTrip = prompt('scrivi quanti km devi percorrere'); 
console.log(Number(userTrip));

const userAge = prompt('scrivi la tua età'); 
console.log(Number(userAge));


//calcolare prezzo tot del viaggio 0.21€ al km
const pricePerKm = (0.21)
console.log(pricePerKm);

var priceTot = (userTrip * pricePerKm)

if (userAge <  18) {
    var priceUnder = (priceTot / 100 * 80)
    console.log (priceUnder)

} else if (userAge > 65){
    var priceOver = (priceTot / 100 * 60)
    console.log (priceOver)
    
} else{
    console.log(priceTot)
}



//sconto under 18 = 20%


//sconto over 65 = 40%