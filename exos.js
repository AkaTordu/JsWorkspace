let age = 25;               // Utilisation de let
console.log("Votre âge est : " + age);
const name = "Alex";        // Utilisation de const
let message = "Bonjour";    // String
let score = 100;            // Number
let isActive = true;        // Boolean

let x = 10;
let y = 5;
let z = x + y;  // 15

console.log("Bonjour "+ name + ", vous avez " + age +" ans");

let random = Math.floor(Math.random() * 100) + 1; // Nombre aléatoire de 1 à 100

let nombre = random;

if ( nombre % 2 === 0) {  // Savoir si c'est un nombre pair ou non 
    console.log("Le nombre aléatoire "+ nombre + " est un nombre pair")
} else {
    console.log("Le nombre aléatoire "+ nombre + " n'est pas un nombre pair")
}

for (let test = 1; test <= 100; test++) { // Guessing du nombre random avec 1 en base
    if (test === nombre) {
        console.log("Nombre trouvé : " + test)
    }
}
