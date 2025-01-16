const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
const infos = document.getElementById("info");

let currentPage = 1;
const imagesPerPage = 10;
let isLoading = false;

async function loadImages() {
  if (isLoading) return;

  loader.style.display = "block";
  isLoading = true;

  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${currentPage}&limit=${imagesPerPage}`
    );
    const images = await response.json();

    images.forEach((image) => {
      const img = document.createElement("img");
      img.src = `https://picsum.photos/id/${image.id}/400/300`;
      img.alt = `Image by ${image.author}`;
      img.title = `Image by ${image.author}`;

      img.addEventListener("click", () => {
        info.innerHTML = `
                    <strong>Auteur :</strong> ${image.author} <br>
                    <strong>ID :</strong> ${image.id} <br>
                    <a href="${image.url}" target="_blank">Lien original</a>
                `;
        info.style.padding = "16px";
        info.style.borderBottom = "1px solid #ddd";
        info.style.background = "#f9f9f9";
      });

      gallery.appendChild(img);
    });

    currentPage++;
  } catch (error) {
    console.error("Erreur lors du chargement des images :", error);
  } finally {
    loader.style.display = "none";
    isLoading = false;
  }
}

window.addEventListener("scroll", () => {
  if (isLoading) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadImages();
  }
});

loadImages();
