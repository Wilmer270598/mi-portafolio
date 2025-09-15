const username = "Wilmer270598"; // <- Cambia esto por tu usuario
const container = document.getElementById("repos-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    container.innerHTML = "";
    data.forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("repo-card");
      card.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "Sin descripción"}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    container.innerHTML = "Error al cargar los repositorios.";
    console.error(error);
  });
