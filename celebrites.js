const apiKey = "y5ZvhJnKl7fQw0irQaXkzw==xdtU4KIpCMFdApED";  
const apiUrl = "https://api.api-ninjas.com/v1/celebrity?name=";

async function searchCelebrity() {
  const name = document.getElementById("searchInput").value;  
  const resultDiv = document.getElementById("result");  
  resultDiv.innerHTML = "Chargement...";  

  try {
    const response = await fetch(apiUrl + encodeURIComponent(name), {
      headers: {
        'X-Api-Key': apiKey
      }
    });

    if (!response.ok) throw new Error("Erreur lors de la récupération");

    const data = await response.json();

    if (data.length === 0) {
      resultDiv.innerHTML = "Aucune célébrité trouvée.";
    } else {
      const celeb = data[0]; 
      const anecdote = getRandomAnecdote(celeb.name);  

      resultDiv.innerHTML = `
        <h2>${celeb.name}</h2>
        <p><strong>Occupation:</strong> ${celeb.occupation}</p>
        <p><strong>Nationality:</strong> ${celeb.nationality}</p>
        <p><strong>Net Worth:</strong> ${celeb.net_worth} M$</p>
        <p><strong>Anecdote:</strong> ${anecdote}</p>
      `;
    }
  } catch (error) {
    resultDiv.innerHTML = "Erreur : " + error.message;
  }
}

function getRandomAnecdote(name) {
 const anecdotes = [
    `${name} a séjourné dans notre Riad et a improvisé un couscous pour toute l'équipe du personnel. Un moment chaleureux inoubliable.`,
    `Lors d’un séjour dans notre Riad, ${name} a passé la soirée sur le toit-terrasse à jouer du oud avec des musiciens locaux, créant une ambiance magique sous les étoiles.`,
    `Pendant une nuit dans notre Riad, ${name} a confondu la porte de la suite avec celle du hammam. L’erreur a débouché sur une conversation animée avec d'autres invités.`,
    `${name} a profité de son séjour à Marrakech pour s’essayer à la préparation du thé à la menthe avec les employés du riad. Résultat : une dégustation mémorable autour du patio.`,
    `Un matin, sur notre Terasse, avec le calme du jardin intérieur ${name} decida d’y rester toute la journée, oubliant même un meeting prévu en ville.`
  ];

  return anecdotes[Math.floor(Math.random() * anecdotes.length)];
}

fetch(specificApiUrl, {
  headers: {
    'X-Api-Key': apiKey  
  }
})
  .then(response => response.json())  
  .then(data => {

    console.log(data);

    const resultDiv = document.getElementById("result");
    if (data.length > 0) {
      const celeb = data[0];
      resultDiv.innerHTML = `
        <h2>${celeb.name}</h2>
        <p><strong>Occupation:</strong> ${celeb.occupation}</p>
        <p><strong>Nationality:</strong> ${celeb.nationality}</p>
        <p><strong>Net Worth:</strong> ${celeb.net_worth} M$</p>
      `;
    }
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
