// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Creo un'array con dentro nome e peso 

const bikes = [
    {
        name: "Aetheros",
        weight: 7.9
    },
    {
        name: "Strada Endurance",
        weight: 7.5
    },
    {
        name: "Grimpeur Max",
        weight: 7.3
    },
    {
        name: "Zenith Racer",
        weight: 6.3
    },
    {
        name: "Ciclone Speed",
        weight: 6.6
    },
    {
        name: "Urban Drifter",
        weight: 6.9
    },
]
// Avvio un ciclo sull'array per confrontare il peso di ogni bici e lo inserisco in una variabile

// Creo una variabile di appoggio per il peso che dovrò salvare alla fine

let lightestBike = bikes[0]

// Avvio un ciclo for
for (i = 0; i < bikes.length; i++) {
    // SE il peso attuale dentro la variabile è maggiore di quello su cui stiamo scorrendo
    if (lightestBike.weight > bikes[i].weight) {
        // aggiorno il valore della variabile con quello su cui stiamo scorrendo
        lightestBike = bikes[i]
    }
}
console.log(lightestBike);

// Stampo in pagina la variabile contente l'oggetto con il peso minore

const lightestBikeEl = document.getElementById("lightest-bike")
lightestBikeEl.innerText = `La bici che pesa meno è ${lightestBike.name} e pesa ${lightestBike.weight}!`





// Snack2**
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// >