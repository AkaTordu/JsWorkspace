// GAME ELEMENTS
const indice = {
    xp: 0,
    prime: 50
};
const repaire_localise = {
    xp: 0,
    prime: 25
}
const boss_tue = {
    xp: 0,
    prime: 25
}

// PVP - PLAYER INTERACTIONS
const hunterOneStar = {
    xp: 0,
    prime: 0
};

const hunterTwoStar = {
    xp: 0,
    prime: 0
};

const hunterThreeStar = {
    xp: 350,
    prime: 0
};

const hunterFourStar = {
    xp: 0,
    prime: 0
};

const reanimation = {
    xp: 100,
    prime: 0
};

// PVE - VERSUS WILD
const goule = {
    xp: 20,
    prime: 0
};
const ruche = {
    xp: 60,
    prime: 0
};
const cerbere = {
    xp: 40,
    prime: 0
};
const cuirasse = {
    xp: 60,
    prime: 0
};
const immolateur = {
    xp: 60,
    prime: 0
};
const sac_a_viande = {
    xp: 60,
    prime: 0
};
const sangsue = {
    xp: 10,
    prime: 0
};

// Exportation en utilisant module.exports pour le projet
module.exports = {
    indice,
    repaire_localise,
    boss_tue,
    hunterOneStar,
    hunterTwoStar,
    hunterThreeStar,
    hunterFourStar,
    reanimation,
    goule,
    ruche,
    cerbere,
    cuirasse,
    immolateur,
    sac_a_viande,
    sangsue
};

// FONCTION DE CALCUL DE MONSTRE //

const readline = require('readline').createInterface({ // demande de rentrer du texte
    input: process.stdin, // le texte en entrée
    output: process.stdout // le texte en sortie
});

const monstres = { // chaque constante plus haut doit être mise ici, c'est le tableau qui contient les variables au dessus
    indice,
    repaire_localise,
    boss_tue,
    hunterOneStar,
    hunterTwoStar,
    hunterThreeStar,
    hunterFourStar,
    reanimation,
    goule,
    ruche,
    cerbere,
    cuirasse,
    immolateur,
    sac_a_viande,
    sangsue
};


// Fonction pour demander et traiter la réponse
const demanderMonstre = () => {
    // Affichage des options
    console.log('Il existe : ' + Object.keys(monstres).join(' / '));
    // Demande du monstre tué
    readline.question('Quel monstre avez-vous tué ? ', (nomMonstre) => {
      // Vérifie si le monstre existe
      if (monstres[nomMonstre]) {
        // Demande du nombre de monstres tués
        readline.question('Combien en avez-vous tué ? ', (nombre) => {
          const xpTotale = monstres[nomMonstre].xp * parseInt(nombre, 10);
          const primeTotale = monstres[nomMonstre].prime * parseInt(nombre, 10);
  
          console.log(`Total XP: ${xpTotale}, Total Prime: ${primeTotale}`);
          readline.close();
        });
      } else {
        console.log('Ce monstre n\'existe pas.');
        demanderMonstre();
      }
    });
};
  
demanderMonstre();