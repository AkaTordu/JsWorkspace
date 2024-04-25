import React, { useState } from 'react';
import { gameElements } from './GameElements';  // Assure-toi que le chemin vers GameElements est correct

export default function GameInterface() {
  const [nomMonstre, setNomMonstre] = useState('');
  const [nombre, setNombre] = useState(0);
  const [resultat, setResultat] = useState({ xp: 0, prime: 0 });
  const [image, setImage] = useState('');
  const [historique, setHistorique] = useState([]);
  const [showHistorique, setShowHistorique] = useState(false);

  const calculerResultat = () => {
    const element = gameElements[nomMonstre];
    if (element) {
      const xpTotale = element.xp * nombre;
      const primeTotale = element.prime * nombre;
      setResultat({ xp: xpTotale, prime: primeTotale });
      setImage(element.image);
      setHistorique([...historique, { nom: element.name, nombre, xp: xpTotale, prime: primeTotale }]);
    } else {
      alert('Ce monstre n\'existe pas.');
      setImage('');
    }
  };

  const toggleHistorique = () => setShowHistorique(!showHistorique);

  return (
    <div>
      <h2>Calculateur de Récompenses</h2>
      <div>
        <label htmlFor="monstre">Choisissez un monstre:</label>
        <select id="monstre" value={nomMonstre} onChange={e => setNomMonstre(e.target.value)}>
          <option value="">Sélectionnez un monstre</option>
          {Object.keys(gameElements).map(monstre => (
            <option key={monstre} value={monstre}>{gameElements[monstre].name}</option>
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
      {image && <img src={image} alt="Image du monstre" style={{ maxWidth: '200px', marginTop: '20px' }} />}
      <button onClick={toggleHistorique}>Afficher/Cacher Historique</button>
      {showHistorique && (
        <div style={{ maxHeight: '200px', overflow: 'auto', marginTop: '10px', border: '1px solid black', padding: '10px' }}>
          <h3>Historique:</h3>
          {historique.map((item, index) => (
            <p key={index}>{item.nombre} {item.nom} - XP Total: {item.xp}, Prime Total: {item.prime}</p>
          ))}
        </div>
      )}
    </div>
  );
}