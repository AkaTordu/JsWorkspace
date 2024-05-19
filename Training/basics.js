// Exercice 1 : Afficher un message
// Écrivez un script qui affiche "Bonjour le Monde" dans la console.

console.log("Bonjour le Monde");

// Exercice 2 : Addition de deux nombres
// Créez une fonction qui prend deux nombres en arguments et retourne leur somme. Affichez le résultat dans la console.

function addition(a, b) {
    return a + b;
}

console.log(addition(5, 7)); // Affiche 12

// Exercice 3 : Déterminer la parité
// Écrivez une fonction qui prend un nombre en argument et affiche "Pair" s'il est pair et "Impair" s'il est impair.

function parite(n) {
    if (n % 2 === 0) {
        console.log("Pair");
    } else {
        console.log("Impair");
    }
}

parite(4); // Affiche "Pair"
parite(7); // Affiche "Impair"

// Exercice 4 : Longueur d'une chaîne
// Créez une fonction qui prend une chaîne de caractères en argument et retourne sa longueur.

function longueurChaine(chaine) {
    return chaine.length;
}

console.log(longueurChaine("Bonjour")); // Affiche 7

// Exercice 5 : Trouver le plus grand nombre
// Écrivez une fonction qui prend trois nombres en arguments et retourne le plus grand des trois.

function plusGrandNombre(a, b, c) {
    return Math.max(a, b, c);
}

console.log(plusGrandNombre(5, 12, 8)); // Affiche 12

// Exercice 6 : Boucle `for`
// Utilisez une boucle `for` pour afficher les nombres de 1 à 10 dans la console.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercice 7 : Compter les voyelles
// Créez une fonction qui prend une chaîne de caractères en argument et retourne le nombre de voyelles dans cette chaîne.

function compterVoyelles(chaine) {
    let compteur = 0;
    let voyelles = 'aeiouyAEIOUY';
    
    for (let i = 0; i < chaine.length; i++) {
        if (voyelles.includes(chaine[i])) {
            compteur++;
        }
    }
    
    return compteur;
}

console.log(compterVoyelles("Bonjour")); // Affiche 3

// Exercice 8 : Table de multiplication
// Écrivez un script qui affiche la table de multiplication de 7 (de 1 à 10).

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Exercice 9 : Inverser une chaîne
// Créez une fonction qui prend une chaîne de caractères en argument et retourne cette chaîne inversée.

function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

console.log(inverserChaine("Bonjour")); // Affiche "ruojnoB"

// Exercice 10 : Filtrer les nombres pairs
// Écrivez une fonction qui prend un tableau de nombres en argument et retourne un nouveau tableau contenant uniquement les nombres pairs.

function filtrerPairs(tableau) {
    return tableau.filter(n => n % 2 === 0);
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Affiche [2, 4, 6, 8, 10]

// Exercice 11 : Carré d'un nombre
// Créez une fonction qui prend un nombre en argument et retourne son carré. Affichez le résultat dans la console.

function carre(n) {
    return n * n;
}
console.log(carre(4)); // Affiche 16

// Exercice 12 : Calculer la factorielle
// Écrivez une fonction qui prend un nombre en argument et retourne sa factorielle. Affichez le résultat dans la console.

function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}
console.log(factorielle(5)); // Affiche 120

// Exercice 13 : Vérifier un palindrome
// Créez une fonction qui prend une chaîne de caractères en argument et retourne `true` si c'est un palindrome, `false` sinon.

function estPalindrome(chaine) {
    let chaineInverse = chaine.split('').reverse().join('');
    return chaine === chaineInverse;
}
console.log(estPalindrome("radar")); // Affiche true
console.log(estPalindrome("bonjour")); // Affiche false

// Exercice 14 : FizzBuzz
// Écrivez un script qui affiche les nombres de 1 à 100. Pour les multiples de 3, affichez "Fizz" au lieu du nombre et pour les multiples de 5, affichez "Buzz". 
// Pour les nombres qui sont des multiples de 3 et 5, affichez "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Exercice 15 : Somme des éléments d'un tableau
// Créez une fonction qui prend un tableau de nombres en argument et retourne la somme de ses éléments.

function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}
console.log(sommeTableau([1, 2, 3, 4, 5])); // Affiche 15

// Exercice 16 : Trouver le nombre maximum dans un tableau
// Écrivez une fonction qui prend un tableau de nombres en argument et retourne le plus grand nombre du tableau.

function nombreMax(tableau) {
    return Math.max(...tableau);
}
console.log(nombreMax([1, 2, 3, 4, 5])); // Affiche 5

// Exercice 17 : Calculer la moyenne des éléments d'un tableau
// Créez une fonction qui prend un tableau de nombres en argument et retourne la moyenne de ses éléments.

function moyenneTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme / tableau.length;
}
console.log(moyenneTableau([1, 2, 3, 4, 5])); // Affiche 3

// Exercice 18 : Compter les mots dans une chaîne
// Écrivez une fonction qui prend une chaîne de caractères en argument et retourne le nombre de mots dans cette chaîne. Les mots sont séparés par des espaces.

function compterMots(chaine) {
    return chaine.split(' ').length;
}
console.log(compterMots("Bonjour tout le monde")); // Affiche 4

// Exercice 19 : Vérifier si un tableau contient un élément
// Créez une fonction qui prend un tableau et un élément en arguments, et retourne `true` si l'élément se trouve dans le tableau, `false` sinon.

function contientElement(tableau, element) {
    return tableau.includes(element);
}
console.log(contientElement([1, 2, 3, 4, 5], 3)); // Affiche true
console.log(contientElement([1, 2, 3, 4, 5], 6)); // Affiche false

// Exercice 20 : Fusionner deux tableaux
// Écrivez une fonction qui prend deux tableaux en arguments et retourne un nouveau tableau contenant tous les éléments des deux tableaux, sans duplication.

function fusionnerTableaux(tableau1, tableau2) {
    return [...new Set([...tableau1, ...tableau2])];
}
console.log(fusionnerTableaux([1, 2, 3], [3, 4, 5])); // Affiche [1, 2, 3, 4, 5]