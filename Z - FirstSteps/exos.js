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
let bigrandom = Math.floor(Math.random() * 1000) + 1; // Nombre aléatoire de 1 à 100

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

function calcul(nombre1, nombre2) {
    return nombre1 + nombre2;
}

let resultat = calcul(random, bigrandom); // test avec les deux random numbers
console.log("La somme est : " + resultat + " avec " + random + " plus " + bigrandom);

let fruits = ["pomme", "banane", "orange"]; // Premier tableau de test
console.log("J'ai trois éléments dans mon tableau, " + fruits[0] + " est le premier");            // 0 = premier élement
console.log("Tandis que " + fruits[1] + " est le deuxième, et " + fruits[2] +" est le troisième")  // et donc fruits[1] = 2e élément du tableau ainsi de suite

// Premier Objet :
let légume = {
    couleur: "Vert",
    origine: "France",
    nom: "Concombre",
    taille: 25,
}
// Appel au nom du légume
console.log("Le nom de mon légume est le " + légume.nom)

// Utilisation de this dans une fonction
let légume2 = {
    couleur: "Vert et Orange",
    origine: "France",
    nom: "Melon",
    taille: 20,

    informations: function () {
        return "Le nom de mon légume est le " + this.nom + ", il vient de " + this.origine + ", mesure " + this.taille + "cm, et possède les couleurs " + this.couleur
    }
}
// Affichage des informations de la fonction
console.log(légume2.informations());


// Création d'un tableau contenant des objets //

// Création d'un autre légume 
let légume3 = {
    couleur: "Vert",
    origine: "France",
    nom: "Concombre",
    taille: 25,

    informations: function () {
        return "Le nom de mon légume est le " + this.nom + ", il vient de " + this.origine + ", mesure " + this.taille + "cm, et possède les couleurs " + this.couleur
    }
}

// Création de potager le tableau qui va contenir les légumes
let potager = [];
potager.push(légume2);
potager.push(légume3);

for (let y = 0; y < potager.length; y++) { // y par comme base, tant que y est inférieur a la taille maximum du tablau potager, on incrémente + 1 à y
    console.log(potager[y].informations()); // On affiche les informations de chaque élément du tableau par ordre croissant
}

// Fonctions asynchrones manipulation de json

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
    }
}

fetchData();

// Test des constantes
const AffichageLégume = `Le nom de mon légume 3 est le ${légume3.nom} et le nom de mon légume 2 est ${légume2.nom}`;
console.log(AffichageLégume);