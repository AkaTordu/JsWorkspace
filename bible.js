// VARIABLES

var oldVar = 'Je suis une ancienne variable';
let newVar = 'Je suis une nouvelle variable';
const constVar = 'Je suis une constante';

// TYPES DE DONNEES

let string = 'Ceci est une chaîne de caractères';
let number = 42;
let boolean = true;
let undefinedVar;
let nullVar = null;
let symbol = Symbol('sym');

// OPERATEURS

let addition = 5 + 3;
let soustraction = 5 - 3;
let multiplication = 5 * 3;
let division = 15 / 3;
let modulo = 15 % 4;

// STRUCTURES DE CONTROLE

if (condition) {
    // Code à exécuter si la condition est vraie
} else if (autreCondition) {
    // Code à exécuter si la première condition est fausse et cette condition est vraie
} else {
    // Code à exécuter si aucune des conditions précédentes n'est vraie
}

for (let i = 0; i < 5; i++) {
    // Répéter 5 fois
}

let i = 0;
while (i < 5) {
    // Répéter tant que la condition est vraie
    i++;
}

// FONCTIONS

function maFonction() {
    return 'Bonjour le monde';
}

const fonctionExpression = function() {
    return 'Bonjour le monde';
};

const fonctionFleche = () => 'Bonjour le monde';

// GESTION DES ERREURS

try {
    // Tentative d'exécution du code
} catch (erreur) {
    // Gestion de l'erreur
} finally {
    // Code qui s'exécute après try/catch, indépendamment du résultat
}

// OBJETS ET TABLEAUX

let objet = { clé: 'valeur' };
let valeur = objet.clé;

let tableau = [1, 2, 3];
tableau.push(4);

// MANIPULATION DU DOM

let element = document.querySelector('#monId');
element.textContent = 'Nouveau contenu';

element.addEventListener('click', function() {
    alert('Element cliqué!');
});

// PROMESSES ET ASYNCHRONYSME

let maPromesse = new Promise((resolve, reject) => {
    // Code asynchrone ici
});

maPromesse.then(valeur => {
    // Traiter la valeur de réussite
}).catch(erreur => {
    // Traiter l'erreur
});

async function fonctionAsynchrone() {
    let valeur = await maPromesse;
    // Traiter la valeur
}

// AUTRES

// Exemple pour la portée (Scope)
let varGlobale = 'Je suis globale';

function maFonction() {
    let varLocale = 'Je suis locale';
    console.log(varGlobale); // Accède à la variable globale
}

console.log(varLocale); // Erreur: varLocale n'est pas définie globalement

// Exemple pour le Hoisting
console.log(maVar); // undefined
var maVar = 'Hoisting!';

// Exemple pour Closure
function externe() {
    let varExterne = 'Je suis externe';

    function interne() {
        console.log(varExterne); // Accède à varExterne de la fonction externe
    }

    return interne;
}

let maClosure = externe();
maClosure(); // 'Je suis externe'