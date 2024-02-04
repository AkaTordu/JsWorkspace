// GAME ELEMENTS
export const indice = {
    xp: 0,
    prime: 50,
};

export const repaire_localise = {
    xp: 0,
    prime: 25,
};

export const boss_tue = {
    xp: 0,
    prime: 25,
};

export const contrat_rempli = { 
    xp: 0, 
    prime: 900
};

// PVP - PLAYER INTERACTIONS
export const hunterOneStar = {
    xp: 0,
    prime: 0,
};

export const hunterTwoStar = {
    xp: 0,
    prime: 0,
};

export const hunterThreeStar = {
    xp: 350,
    prime: 0,
};

export const hunterFourStar = {
    xp: 0,
    prime: 0,
};

export const reanimation = {
    xp: 100,
    prime: 0,
};

// PVE - VERSUS WILD
export const goule = {
    xp: 20,
    prime: 0,
};

export const ruche = {
    xp: 60,
    prime: 0,
};

export const cerbere = {
    xp: 40,
    prime: 0,
};

export const cuirasse = {
    xp: 60,
    prime: 0,
};

export const immolateur = {
    xp: 60,
    prime: 0,
};

export const sac_a_viande = {
    xp: 60,
    prime: 0,
};

export const sangsue = {
    xp: 10,
    prime: 0,
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
    contrat_rempli,
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