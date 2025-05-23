const chambresData = [
    {
        "nom": "Chambre Oasis de Marrakech",
        "description": "Cette chambre est inspirée du charme traditionnel de Marrakech. Des meubles en bois naturel, elle offre un environnement confortable, tout en restant accessible. Un lit confortable, parfait pour une escapade relaxante.",
        "prix": "80€ / nuit",
        "equipements": [
            "Lit double en bois naturel",
            "Décoration simple",
            "Climatisation, Option pour Wi-Fi",
        ],
        "photo": "img/oasis.JPG"
    },
    {
        "nom": "Chambre Orientale",
        "description": "Une petite chambre moderne, élégante, aux tons beige et gris, avec des détails marocains subtils. Idéale pour une escapade paisible dans un cadre oriental raffiné.",
        "prix": "110€ / nuit",
        "equipements": [ 
            "Éclairage doux et apaisant",
            "Décoration élégante.",
            "Climatisation et Wi-Fi",
        ],
        "photo": "img/orientale.jpg"
    },
    {
        "nom": "Chambre du Maroc Royal",
        "description": "Une chambre authentique avec des couleurs lumineuses.",
        "prix": "150€ / nuit",
        "equipements": [
            "Lit king-size", 
            "Porte artisanale",
            "Climatisation et Wi-Fi",
            "Éclairage tamisé."
        ],
        "photo": "img/royal.jpg"
    },
    {
        "nom": "Suite Bleue Marocco",
        "description": "Un mélange de tradition et de modernité, cette suite vous plonge dans l'ambiance magique du Maroc. Les rideaux en tissus légers ajoutent une touche de confort et d'élégance.",
        "prix": "190€ / nuit",
        "equipements": [
            "Lit king-size",
            "Salle de bain en zellige bleu et blanc",
            "Terrasse privée avec vue sur le jardin",
            "Climatisation, Wi-Fi, et coffre-fort"
        ],
        "photo": "img/suite.jpg"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const chambresSection = document.getElementById("chambres");

    chambresData.forEach(chambre => {
        const chambreElement = document.createElement("div");
        chambreElement.classList.add("chambre");

        chambreElement.innerHTML = `
            <div class="chambre-text">
                <h3>${chambre.nom}</h3>
                <p>${chambre.description}</p>
                <p><strong>Prix :</strong> <span style="font-weight: bold; color: black;">${chambre.prix.split(' / ')[0]}</span> / ${chambre.prix.split(' / ')[1]}</p>
                <ul>${chambre.equipements.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <img src="${chambre.photo}" alt="${chambre.nom}">
        `;

        chambresSection.appendChild(chambreElement);
    });

    showTab('menu-content');
});

function showTab(tabName) {
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active');

    const activeButton = document.querySelector(`button[onclick="showTab('${tabName}')"]`);
    activeButton.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".main-button");
    btn.addEventListener("click", function() {
        btn.classList.toggle("btn-selected");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('card-selected');
        });
    });
});