document.addEventListener("DOMContentLoaded", async () => {
  const movieData = JSON.parse(localStorage.getItem('selectedMovie'));
  if (movieData && movieData.imdbID) {
    const apiKey = '19bb48ba';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movieData.imdbID}&plot=full`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        document.getElementById("film-title").textContent = data.Title;
        document.getElementById("film-poster").src = data.Poster !== "N/A" ? data.Poster : 'placeholder.jpg';
        document.getElementById("film-summary").textContent = `Résumé du film : ${data.Plot}`;
        document.getElementById("film-genre").textContent = `Genre : ${data.Genre}`;
        document.getElementById("film-actors").textContent = `Acteurs : ${data.Actors}`;
        document.getElementById("film-rating").textContent = `Note : ${data.imdbRating}`;
        document.getElementById("dvd-release-date").textContent = `Sortie en DVD : ${data.DVD}`;
      } else {
        console.error("Erreur lors de la récupération des détails du film :", data.Error);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des détails du film :", error);
    }
  } else {
    console.error("Aucune donnée de film trouvée dans le localStorage.");
  }
});