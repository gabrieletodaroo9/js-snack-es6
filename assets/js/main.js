// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Creo un'array con dentro nome e peso 

const bikes = [
    {
        name: "Fausto",
        weight: 7.9
    },
    {
        name: "Pino",
        weight: 7.5
    },
    {
        name: "Gino",
        weight: 8.3
    },
    {
        name: "Tino",
        weight: 6.8
    },
    {
        name: "Filippo",
        weight: 6.6
    },
    {
        name: "Mario",
        weight: 6.2
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




// Snack2**
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// >