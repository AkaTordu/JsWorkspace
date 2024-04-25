import React, { useState } from 'react';
import { gameElements } from './GameElements';  // Assure-toi que le chemin vers GameElements est correct
import styles from '../styles/itemAnim.module.css'; // Assure-toi que le chemin vers le fichier CSS module est correct

export default function GameInterface() {
  const [nomMonstre, setNomMonstre] = useState('');
  const [nombre, setNombre] = useState(0);
  const [resultat, setResultat] = useState({ xp: 0, prime: 0 });
  const [historique, setHistorique] = useState([]);
  const [showHistorique, setShowHistorique] = useState(false);

  const calculerResultat = () => {
    const element = gameElements[nomMonstre];
    if (element) {
      const xpTotale = element.xp * nombre;
      const primeTotale = element.prime * nombre;
      setResultat({ xp: xpTotale, prime: primeTotale });
      setHistorique([...historique, { nom: element.name, nombre, xp: xpTotale, prime: primeTotale }]);
    } else {
      alert('Ce monstre n\'existe pas.');
    }
  };

  const toggleHistorique = () => {
    setShowHistorique(!showHistorique);
  };

  return (
    <div className={styles.container}>
      <div className={styles.zone}>
        <div className={styles.header}>Choisissez votre monstre et nombre tués</div>
        <div className={styles.inputGroup}>
          <label htmlFor="monstre">Monstre : </label>
          <select id="monstre" value={nomMonstre} onChange={e => setNomMonstre(e.target.value)}>
            <option value="">Sélectionnez un monstre</option>
            {Object.keys(gameElements).map(monstre => (
              <option key={monstre} value={monstre}>{gameElements[monstre].name}</option>
            ))}
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="nombre">Nombre tués / Interactions : </label>
          <input
            id="nombre"
            type="number"
            value={nombre}
            onChange={e => setNombre(Number(e.target.value))}
          />
        </div>
        <button onClick={calculerResultat}>Calculer</button>
      </div>
      <div className={styles.zone}>
        <div className={styles.header}>Total</div>
        <p>Total XP: {resultat.xp}, Total Prime: {resultat.prime}</p>
      </div>
      <button onClick={toggleHistorique} style={{ margin: '10px' }}>Afficher/Cacher Historique</button>
      {showHistorique && (
        <div className={styles.zone} style={{ maxHeight: '200px', overflow: 'auto' }}>
          <div className={styles.header}>Historique</div>
          {historique.map((item, index) => (
            <div key={index} className={styles.historyItem}>
              {item.nombre} {item.nom} - XP Total: {item.xp}, Prime Total: {item.prime}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}