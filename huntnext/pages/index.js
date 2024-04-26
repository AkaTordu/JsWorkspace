import styles from '../styles/globals.css';  // Importe les styles globaux
import GameInterface from '../components/GameInterface';  // Assure-toi que le chemin est correct

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bienvenue dans Mon Jeu</h1>
      </header>
      <main>
        <GameInterface className={styles.gameInterface} />
      </main>
      <footer className={styles.footer}>
        <p>© 2023 Mon Jeu. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
