const apiKey = '19bb48ba';
const year = '2024';
const url = `https://www.omdbapi.com/?apikey=${apiKey}&y=${year}&s=movie`;
let currentPage = 1;
let displayedMoviesCount = 0;
let allMovies = [];

function updateMoviePosters(movies, append = false) {
  const filmContainer = document.getElementById("films-container");
  if (!append) {
    filmContainer.innerHTML = ''; // Clear any existing content
    displayedMoviesCount = 0;
  }

  const moviesToDisplay = movies.slice(displayedMoviesCount, displayedMoviesCount + (append ? 9 : 3));
  moviesToDisplay.forEach(movie => {
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

  displayedMoviesCount += moviesToDisplay.length;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchTrendingMovies(currentPage);
});

document.querySelector(".voir-plus").addEventListener("click", () => {
  currentPage++;
  fetchTrendingMovies(currentPage, true);
});

async function fetchTrendingMovies(page, append = false) {
  try {
    const response = await fetch(`${url}&page=${page}`);
    const data = await response.json();
    if (data.Response === "True") {
      if (append) {
        allMovies = allMovies.concat(data.Search);
      } else {
        allMovies = data.Search;
      }
      updateMoviePosters(allMovies, append);
    } else {
      console.error("Erreur lors de la récupération des films :", data.Error);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
  }
}