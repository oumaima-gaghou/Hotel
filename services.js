const servicesData = [
  {
    title: "Hébergement de Luxe",
    description: "Des chambres spacieuses et élégantes avec vue sur le jardin et la piscine :",
    details: [
      "✨ Suites",
      "💍 Suites nuptiales",
      "Chambres non-fumeurs",
      "Chambres familiales",
      "🔐 Équipées d'un coffre-fort",
      "☕ 🫓 Petit-déjeuner offert tout les matins",
      "Animaux domestiques autorisés (Chiens/Animaux de compagnie)",
      "Service de blanchisserie et repassage",
      "📶 Restez connecté avec un accès Wi-Fi gratuit dans tout le Riad."
    ],
    image: "img/suite.jpg"
  },
  {
    title: "Restauration Traditionnelle",
    description: "Goûtez aux saveurs marocaines authentiques :",
    details: [
      "Et également aux spécialités culinaires de notre cheffe étoilée la celèbre MARIAM YCENNAR alliant ses deux cultures : Fusion entre la gastronomie française contemporaine et les traditions marocaines, mettant en avant des plats tels que le tajine revisité au foie gras ou la pastilla au confit de canard, préparées par nos commis et chefs cuisiniers expérimentés sous la direction du cheffe Ycennar. Formée à l'Institut Paul Bocuse, elle a travaillé dans plusieurs établissements étoilés en France et au Maroc avant d'ouvrir son propre restaurant, Le Jardin de Mariam, à Paris. ⭐⭐ au Guide Michelin.",
    ],
    image: "img/chef.jpg"
  },
  {
    title: "Spa et Bien-être",
    description: "Profitez d'un moment de relaxation dans notre spa :",
    details: [
      "Massage en couple entre 36 et 64 euros",
      "Soins du visage entre 20 et 40 euros",
      "Bain de vapeur au Hammam Khalti entre 15 et 35 euros",
      "Bain au Citron de Beldi 🍋, excellent soin des peaux sensibles entre 30 et 60 euros",
      "Soin de luminothérapie inspiré de la technique de JAMES TURELL, utilisant la lumière comme matière artistique pour une expérience sensorielle immersive entre 50 et 100 euros."
    ],
    image: "img/spasoin.jpg"
  },
  {
    title: "Excursions et Activités",
    description: "Découvrez Marrakech et ses environs à travers des excursions organisées spécialement pour vous.",
    details: [
      "Inclus dans la prestation:",
      "Transfert à votre arrivée depuis l’aéroport vers le Riad",
      "Service de taxi pour votre dernière journée",
      "Tour de calèche direction Jamaâ El-Fna pour votre première sortie",
      "Locations de vehicules disponible à proximité:(Locations de voitures, Jeep, Vélos également)",
      "Quad dans le désert: 30 euros",
      "Balade à dos de chameaux: 25 euros",
      "Balade en Montgolfière: 140 euros",
      "Diner spectacle sous les étoiles autour d'un feu de camp: 55 euros"
    ],
    image: "img/excursions.jpg"
  }
];
document.addEventListener("DOMContentLoaded", () => {
  const servicesList = document.getElementById("services-list");

  servicesData.forEach(service => {
    const serviceDiv = document.createElement("div");
    serviceDiv.classList.add("service");
    serviceDiv.style.backgroundImage = `url(${service.image})`;
    serviceDiv.style.backgroundSize = "cover";
    serviceDiv.style.backgroundPosition = "center";
    serviceDiv.style.backgroundRepeat = "no-repeat";
    serviceDiv.style.color = "white";
    serviceDiv.style.textShadow = "1px 1px 2px rgba(0,0,0,0.7)";

    const title = document.createElement("h3");
    title.textContent = service.title;

    const description = document.createElement("p");
    description.textContent = service.description;

    serviceDiv.appendChild(title);
    serviceDiv.appendChild(description);

    if (service.details.length > 0) {
      const ul = document.createElement("ul");
      service.details.forEach(detail => {
        const li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
      });
      serviceDiv.appendChild(ul);
    }

    servicesList.appendChild(serviceDiv);
  });
});