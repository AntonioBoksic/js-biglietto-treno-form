// definizione variabili
let km, age, price, fullPrice;

// definizione costanti
let pricePerKm, juniorAge, seniorAge, juniorDiscount, seniorDiscount;


pricePerKm = 0.21;
juniorAge = 18;
seniorAge = 65;
juniorDiscount = 0.2;
seniorDiscount = 0.4;

// prendere input da utente

// (((((((())))))))
// logica esercizio vecchio 
// km = prompt ("quanti km devi percorrere?");
// age = prompt ("quanti anni hai?");
// (((((((())))))))


// logica esercizio nuovo


// seleziono elementi HTML che mi servono per la logica del programma
let kmText = document.querySelector("#kmText")
console.log(kmText);

let ageText = document.querySelector("#ageText");
console.log(ageText);

let myButton = document.querySelector("#myButton");
console.log(myButton);

// voglio salvare i dati dopo il click

myButton.addEventListener("click"), 
function () {
    kmText = document.getElementById("#kmText").value;
    ageText = document.getElementById("#ageText").value;
    console.log(kmText);
    console.log(ageText);
}


// calcolare prezzo intero

fullPrice = pricePerKm * km;

// stabilire prezzo finale in base a sconto età

if (age < juniorAge) {
    price = fullPrice * (1- juniorDiscount);
} else if (age >= seniorAge) {
    price = fullPrice * (1-seniorDiscount);
} else {
    price = fullPrice;
};


// genera messaggio da restituire
messaggio = `il costo del tuo biglietto è  ${price.toFixed(2)} Euro`;

// restituisci messaggio finale all utente

document.getElementById("mio-id").innerHTML = messaggio



