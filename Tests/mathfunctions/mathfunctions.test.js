// DEBUGGING
const double = require('./mathfunctions.js'); // Chemin vers mon fichier avec mes fonctions maths

test('le double de 5 est 10', () => {         // test et expect pour le débug
    expect(double(5)).toBe(10)                // On suppose que la fonction double appliquée sur 5 donne 10
});

// Modification dans le package.json pour ajouter Jest
/*
"scripts": {
    "test": "jest"
}
*/

/*
Après avoir fait npm test dans ce dossier on a :
> jsworkspace@1.0.0 test
> jest

 PASS  ./mathfunctions.test.js
  √ le double de 5 est 10 (2 ms)
                                                                                        
Test Suites: 1 passed, 1 total                                                          
Tests:       1 passed, 1 total                                                          
Snapshots:   0 total
Time:        0.488 s
Ran all test suites.

Ce qui confirme que le test a bien eu lieu et s'est bien déroulé*/