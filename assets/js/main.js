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
for (i = 1; i < bikes.length; i++) {
    // Creo una variabile per assegnare l'attuale interazione
    const thisbike = bikes[i]
    // SE il peso attuale dentro la variabile è maggiore di quello su cui stiamo scorrendo
    if (lightestBike["weight"] > thisbike["weight"]) {
        // aggiorno il valore della variabile con quello su cui stiamo scorrendo
        lightestBike = thisbike
    }
}
console.log(lightestBike);

// Stampo in pagina la variabile contente l'oggetto con il peso minore

const lightestBikeEl = document.getElementById("lightest-bike")
lightestBikeEl.innerText = `La bici che pesa meno è ${lightestBike["name"]} e pesa ${lightestBike["weight"]}!`





// Snack2**
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// >


// Aggiungo funzione mathrandom

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Creo un array con diverse squadre di calcio

const footballTeams = [
    {
        name: "Barcelona",
        points: 0,
        foulsReceived: 0
    },
    {
        name: "Inter",
        points: 0,
        foulsReceived: 0
    },
    {
        name: "Real Madrid",
        points: 0,
        foulsReceived: 0
    },
    {
        name: "Bayern Monaco",
        points: 0,
        foulsReceived: 0
    },
    {
        name: "Liverpool",
        points: 0,
        foulsReceived: 0
    },
];

//  Avvio un ciclo for per assegnare a punti fatti e falli subiti un numero random

for (let key in footballTeams) {
    thisTeam = footballTeams[key]
    thisTeam["points"] = getRandomNumber(30, 99);
    thisTeam["foulsReceived"] = getRandomNumber(5, 50);
}

// for (i = 0; i < footballTeams.length; i++) {
//     footballTeams[i].points = getRandomNumber(30, 99)
//     footballTeams[i].foulsReceived = getRandomNumber(5, 50)
// }

console.log(footballTeams);

// Creo un nuovo array per contenere tutte le squadre ma senza i punti fatti

const newArrFootballTeams = []

// Avvio un ciclo che prenda solo le proprietà che ci servono e ce le trasferisca al nuovo array ad ogni interazione

for (let key in footballTeams) {
    // Creo una variabile per assegnare l'attuale iterazione
    const thisTeam = footballTeams[key]
    // Creo un nuovo oggetto da pushare ad ogni interazione
    const newObj = {
        name: thisTeam["name"],
        foulsReceived: thisTeam["foulsReceived"]
    }
    // Invio al nuovo array il nuovo oggetto ad ogni interazione
    newArrFootballTeams.push(newObj)
}

// Stampo il risultato in console
console.log(newArrFootballTeams);
