const apiKey = '19bb48ba';
const year = '2024';
const url = `https://www.omdbapi.com/?apikey=${apiKey}&y=${year}&s=movie`;
let currentPage = 1;

async function fetchTrendingMovies(page) {
  try {
    const response = await fetch(`${url}&page=${page}`);
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
  const filmContainer = document.getElementById("films-container");
  movies.forEach(movie => {
    const filmElement = document.createElement("div");
    filmElement.classList.add("film");

    const linkElement = document.createElement('a');
    linkElement.href = 'movie.html';
    linkElement.addEventListener('click', (event) => {
      event.preventDefault();
      const movieData = {
        title: movie.Title,
        poster: movie.Poster,
        imdbID: movie.imdbID
      };
      localStorage.setItem('selectedMovie', JSON.stringify(movieData));
      window.location.href = 'movie.html';
    });

    const imgElement = document.createElement("img");
    imgElement.src = movie.Poster !== "N/A" ? movie.Poster : 'placeholder.jpg';
    imgElement.alt = movie.Title;

    const titleElement = document.createElement("h3");
    titleElement.textContent = movie.Title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = movie.Year;

    linkElement.appendChild(imgElement);
    filmElement.appendChild(linkElement);
    filmElement.appendChild(titleElement);
    filmElement.appendChild(descriptionElement);

    filmContainer.appendChild(filmElement);
  });

  const loadMoreButton = document.querySelector(".voir-plus");
  loadMoreButton.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  fetchTrendingMovies(currentPage);
});

document.querySelector(".voir-plus").addEventListener("click", function () {
  this.style.display = "none"; // Masquer le bouton pendant le chargement
  fetchTrendingMovies(++currentPage);
});