
document.addEventListener("DOMContentLoaded", () => {
    // Exemple de données dynamiques
    const filmData = {
      title: "Inception",
      poster: "../Assets/bleu.jpg", // Remplacez par une vraie URL
      summary: "Un voleur qui dérobe des secrets à l'aide de la technologie d'infiltration des rêves est chargé d'une mission presque impossible.",
      genre: "Science-fiction, Action",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      rating: "4.8/5",
      dvdRelease: "16/12/2010"
    };
  
    // Remplir les éléments HTML avec les données
    document.getElementById("film-title").textContent = filmData.title;
    document.getElementById("film-poster").src = filmData.poster;
    document.getElementById("film-summary").textContent = `Résumé du film : ${filmData.summary}`;
    document.getElementById("film-genre").textContent = `Genre : ${filmData.genre}`;
    document.getElementById("film-actors").textContent = `Acteurs : ${filmData.actors}`;
    document.getElementById("film-rating").textContent = `Note : ${filmData.rating}`;
    document.getElementById("dvd-release-date").textContent = filmData.dvdRelease;
  
    // Bonus : Animation au survol de l'affiche
    const poster = document.getElementById("film-poster");
    poster.addEventListener("mouseover", () => {
      poster.style.transform = "scale(1.1)";
      poster.style.transition = "transform 0.3s ease";
    });
  
    poster.addEventListener("mouseout", () => {
      poster.style.transform = "scale(1)";
    });
  });
  