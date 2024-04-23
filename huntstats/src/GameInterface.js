import React, { useState } from 'react';
import { gameElements } from './GameElements';

const GameInterface = () => {
    const [nomMonstre, setNomMonstre] = useState('');
    const [nombre, setNombre] = useState(0);
    const [resultat, setResultat] = useState({ xp: 0, prime: 0 });
    // const [image, setImage] = useState('');
    const [historique, setHistorique] = useState([]);
    const [showHistorique, setShowHistorique] = useState(false);

    const calculerResultat = () => {
        const element = gameElements[nomMonstre];
        if (element) {
            const xpTotale = element.xp * nombre;
            const primeTotale = element.prime * nombre;
            setResultat({ xp: xpTotale, prime: primeTotale });
            // setImage(element.image);
            setHistorique(historique.concat({ nom: element.name, nombre, xp: xpTotale, prime: primeTotale }));
        } else {
            alert('Ce monstre n\'existe pas.');
            // setImage('');
        }
    };

    const toggleHistorique = () => setShowHistorique(!showHistorique);

    const totalXp = historique.reduce((acc, curr) => acc + curr.xp, 0);
    const totalPrime = historique.reduce((acc, curr) => acc + curr.prime, 0);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}> {/* Conteneur global */}
                <div style={{ width: '70%' }}> {/* Calculateur centré */}
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
                    <button onClick={toggleHistorique}>Afficher/Cacher Historique</button>
                    {showHistorique && (
                        <div style={{ maxHeight: '200px', overflow: 'auto', marginTop: '10px', border: '1px solid black', padding: '50px' }}>
                            <h3>Historique (total : {totalPrime} prime / {totalXp} xp):</h3>
                            {historique.map((item, index) => (
                                <p key={index}>{item.nombre} {item.nom} - XP Total: {item.xp}, Prime Total: {item.prime}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameInterface;