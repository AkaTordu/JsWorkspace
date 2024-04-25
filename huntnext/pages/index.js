import Head from 'next/head';
import GameInterface from '../components/GameInterface';  // Assure-toi que le chemin est correct
import styles from '../styles/home.module.css';  // Assure-toi que le chemin est correct

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mon Jeu</title>  // Titre de la page
        <meta name="description" content="Calculateur de récompenses pour mon jeu" />  // Description pour le SEO
        <link rel="icon" href="/favicon.ico" />  // Icône de l'onglet du navigateur
      </Head>
      <main>
        <h1>Bienvenue dans Mon Jeu</h1>
        <GameInterface />  // Ton composant principal pour l'interface de jeu
      </main>
      <footer>
        <p>© 2023 Mon Jeu. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
