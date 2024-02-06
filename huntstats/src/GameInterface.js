import React, { useState } from 'react';
import { gameElements } from './GameElements';

const GameInterface = () => {
    const [nomMonstre, setNomMonstre] = useState('');
    const [nombre, setNombre] = useState(0);
    const [resultat, setResultat] = useState({ xp: 0, prime: 0 });
    const [image, setImage] = useState('');

    const calculerResultat = () => {
        const element = gameElements[nomMonstre];
        if (element) {
            const xpTotale = element.xp * nombre;
            const primeTotale = element.prime * nombre;
            setResultat({ xp: xpTotale, prime: primeTotale });
            setImage(element.image); // Met à jour l'image
        } else {
            alert('Ce monstre n\'existe pas.');
            setImage(''); // Réinitialise l'image si le monstre n'existe pas
        }
    };

    return (
        <div>
            <h2>Calculateur de Récompenses</h2>
            <div>
                <label htmlFor="monstre">Choisissez un monstre:</label>
                <select id="monstre" value={nomMonstre} onChange={e => setNomMonstre(e.target.value)}>
                    <option value="">Sélectionnez un monstre</option>
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
            {image && <img src={image} alt="Monstre" style={{ maxWidth: '200px', marginTop: '20px' }} />}
        </div>
    );
};

export default GameInterface;