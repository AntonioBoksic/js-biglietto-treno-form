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

let registerButton = document.querySelector("#registerButton");
console.log(registerButton);

// voglio salvare i dati dopo il click

registerButton.addEventListener("click", 
    function () 
    {
        kmText = document.getElementById("kmText").value;
        ageText = document.getElementById("ageText").value;
        nameText = document.getElementById("nameText").value;
        console.log(kmText);
        console.log(ageText);
        console.log(nameText);


        
        // calcolare prezzo intero
        fullPrice = pricePerKm * kmText;
        console.log(fullPrice);
        
        // stabilire prezzo finale in base a sconto età
        {
            if (ageText < juniorAge) {
                price = fullPrice * (1- juniorDiscount);
            } else if (ageText >= seniorAge) {
                price = fullPrice * (1-seniorDiscount);
            } else {
                price = fullPrice;
            };
            console.log(price)


        }

        // genera messaggio da restituire
        messaggio = `${price.toFixed(2)} Euro`;

        // restituisci nome e costo per il biglietto
        document.getElementById("costo").innerHTML = messaggio;
        document.getElementById("nome").innerHTML = nameText;


    } 
    

);


// (questo l'ho inserito sopra  nell eventListener e viene preso in considerazione solo dopo il click) calcolare prezzo intero

// fullPrice = pricePerKm * kmText;

// stabilire prezzo finale in base a sconto età

// if (ageText < juniorAge) {
//     price = fullPrice * (1- juniorDiscount);
// } else if (ageText >= seniorAge) {
//     price = fullPrice * (1-seniorDiscount);
// } else {
//     price = fullPrice;
// };


// genera messaggio da restituire
// messaggio = `il costo del tuo biglietto è  ${price.toFixed(2)} Euro`;

// // restituisci messaggio finale all utente

// document.getElementById("mio-id").innerHTML = messaggio

registerButton.addEventListener("click", 
    function () 
    {

        let ticket = document.getElementById("ticket");
        ticket.classList.add("attivato");
        ticket.classList.remove("disattivato");

    }
);
