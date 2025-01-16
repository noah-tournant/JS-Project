document
  .querySelector(".rechercher-film")
  .addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s";
  });

document
  .querySelector(".rechercher-film")
  .addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
    this.style.transition = "transform 0.3s";
  });

document.querySelector(".voir-plus").addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
  this.style.transition = "transform 0.3s";
});
document.querySelector(".voir-plus").addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
  this.style.transition = "transform 0.3s";
});
// Animation pour le bouton "Voir plus de films"
document.querySelector(".voir-plus").addEventListener("click", function () {
  this.innerText = "Chargement...";
  setTimeout(() => {
    this.innerText = "Je souhaite rechercher un film";
  }, 2000);
});

// Animation pour les films
document.querySelectorAll(".film").forEach((film) => {
  film.addEventListener("mouseover", () => {
    film.style.transform = "scale(1.05)";
    film.style.transition = "transform 0.3s";
  });

  film.addEventListener("mouseout", () => {
    film.style.transform = "scale(1)";
  });
});

const apiKey = '19bb48ba';
const year = '2024';
const url = `https://www.omdbapi.com/?apikey=${apiKey}&y=${year}&s=movie`;

async function fetchTrendingMovies() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      updateMoviePosters(data.Search);
    } else {
      console.error("Erreur lors de la récupération des films :", data.Error);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
  }
}

function updateMoviePosters(movies) {
  const filmElements = document.querySelectorAll(".film");
  filmElements.forEach((filmElement, index) => {
    if (movies[index]) {
      const imgElement = filmElement.querySelector("img");
      const titleElement = filmElement.querySelector("h3");
      const descriptionElement = filmElement.querySelector("p");

      imgElement.src = movies[index].Poster;
      imgElement.alt = movies[index].Title;
      titleElement.textContent = movies[index].Title;
      descriptionElement.textContent = movies[index].Year;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchTrendingMovies();
});

// Animation pour le bouton "Voir plus de films"
document.querySelector(".voir-plus").addEventListener("click", function () {
  this.innerText = "Chargement...";
  setTimeout(() => {
    this.innerText = "Je souhaite rechercher un film";
  }, 2000);
});

// Animation pour les films
document.querySelectorAll(".film").forEach((film) => {
  film.addEventListener("mouseover", () => {
    film.style.transform = "scale(1.05)";
    film.style.transition = "transform 0.3s";
  });

});
