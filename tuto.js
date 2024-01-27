// PASSAGE A LA MANIPULATION HTML //

document.getElementById("bouton").addEventListener("click", function() {
    document.getElementById("texte").style.color = "blue";
});

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        
        // On a mis callAPI en ID d'une des balises p parce qu'on veut afficher le texte du fetch
        let pElement = document.getElementById('callAPI');
        pElement.textContent = 'Titre: ' + data.title + ', id:' + data.id; // ici on change les données qu'on veut afficher a volonté
        // Sachant que l'output initial est { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
    } catch (error) {
        console.error('Erreur lors de la récupération des données', error); // En cas d'erreur
    }
}

fetchData();