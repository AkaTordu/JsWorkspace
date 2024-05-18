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