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
