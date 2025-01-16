const apiKey = '19bb48ba';
let currentPage = 1;
let currentQuery = '';

const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');
const loadMoreButton = document.getElementById('load-more');

searchBar.addEventListener('input', () => {
  currentQuery = searchBar.value;
  currentPage = 1;
  searchResults.innerHTML = '';
  if (currentQuery) {
    fetchMovies(currentQuery, currentPage);
  }
});

loadMoreButton.addEventListener('click', () => {
  if (currentQuery) {
    fetchMovies(currentQuery, ++currentPage);
  }
});

async function fetchMovies(query, page) {
  try {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "True") {
      displayMovies(data.Search);
      loadMoreButton.style.display = 'block';
    } else {
      console.error("Erreur lors de la récupération des films :", data.Error);
      loadMoreButton.style.display = 'none';
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
  }
}

function displayMovies(movies) {
  movies.forEach(movie => {
    const filmElement = document.createElement('div');
    filmElement.classList.add('film');

    const linkElement = document.createElement('a');
    linkElement.href = `movie.html?imdbID=${movie.imdbID}`;

    const imgElement = document.createElement('img');
    imgElement.src = movie.Poster !== "N/A" ? movie.Poster : 'placeholder.jpg';
    imgElement.alt = movie.Title;

    const titleElement = document.createElement('h3');
    titleElement.textContent = movie.Title;

    filmElement.appendChild(imgElement);
    filmElement.appendChild(linkElement);
    filmElement.appendChild(titleElement);
    
    searchResults.appendChild(filmElement);
  });
}