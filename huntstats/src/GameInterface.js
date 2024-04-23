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
            setImage(element.image);
        } else {
            alert('Ce monstre n\'existe pas.');
            setImage('');
        }
    };

    return (
        <div>
            <h2>Calculateur de Récompenses</h2>
            <div>
                <label htmlFor="monstre">Choisissez un monstre:</label>
                <select id="monstre" value={nomMonstre} onChange={e => setNomMonstre(e.target.value)}>
                    <option value="">Sélectionnez un monstre</option>
                    {Object.entries(gameElements).map(([key, { name }]) => (
                        <option key={key} value={key}>{name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="nombre">Nombre tués / Interactions :</label>
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