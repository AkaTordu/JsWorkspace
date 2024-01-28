function appuyerSurBouton(valeur) {
    document.getElementById('ecran').value += valeur;
}

function calculer() {
    let resultat = eval(document.getElementById('ecran').value);
    document.getElementById('ecran').value = resultat;
}

function effacer() {
    document.getElementById('ecran').value = '';
}