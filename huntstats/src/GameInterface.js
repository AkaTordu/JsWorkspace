import React, { useState } from 'react';
import { gameElements } from './GameElements.js'; // Assurez-vous que le chemin d'importation est correct

const GameInterface = () => {
    const [nomMonstre, setNomMonstre] = useState('');
    const [nombre, setNombre] = useState(0);
    const [resultat, setResultat] = useState({ xp: 0, prime: 0 });

    const calculerResultat = () => {
        const element = gameElements[nomMonstre];
        if (element) {
            const xpTotale = element.xp * nombre;
            const primeTotale = element.prime * nombre;
            setResultat({ xp: xpTotale, prime: primeTotale });
        } else {
            alert('Ce monstre n\'existe pas.');
        }
    };

    return (
        <div>
            <h2>Calculateur de Récompenses</h2>
            <div>
                <label htmlFor="monstre">Choisissez un monstre:</label>
                <select id="monstre" value={nomMonstre} onChange={e => setNomMonstre(e.target.value)}>
                    {Object.keys(gameElements).map(monstre => (
                        <option key={monstre} value={monstre}>{monstre}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="nombre">Nombre tués:</label>
                <input
                    id="nombre"
                    type="number"
                    value={nombre}
                    onChange={e => setNombre(Number(e.target.value))}
                />
            </div>
            <button onClick={calculerResultat}>Calculer</button>
            <div>
                <p>Total XP: {resultat.xp}, Total Prime: {resultat.prime}</p>
            </div>
        </div>
    );
};

export default GameInterface;