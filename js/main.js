import { obtenerAnuncios, obtenerPeliculas, obtenerResenas, translations } from "./api.js";
import { crearFiltroPeliculas, loadLanguage, loadLikedMovies, saveLanguage, saveLikedMovies } from "./cache.js";
import { closeFavoritesModal, closeMovieModal, getElements, openFavoritesModal, openMovieModal, renderFavorites, renderFilters, renderMovies, showSpinner } from "./ui.js";

const elements = getElements();
let language = loadLanguage();
let activeGenre = "all";
let searchTerm = "";
let openMovieId = null;
const likedMovies = loadLikedMovies();
let movies = [];
let resenas = [];
let anuncios = [];
let genreKeys = [];
let genreMovies = [];
const t = (key) => translations[language][key];
const genreLabel = (key) => translations[language].genres[key];
const filtrarPeliculas = crearFiltroPeliculas();
const getFilteredMovies = () => { const search = searchTerm.trim().toLowerCase(); return genreMovies.filter((movie) => !search || `${movie.title[language]} ${genreLabel(movie.genreKey)} ${movie.description[language]}`.toLowerCase().includes(search)); };
const getLikedMovieList = () => movies.filter((movie) => likedMovies.has(movie.id));
const drawMovies = () => renderMovies(elements, getFilteredMovies(), likedMovies, language, t, genreLabel);
const drawFavorites = () => renderFavorites(elements, getLikedMovieList(), language, t, genreLabel);

function updateLikedCounter() { const total = likedMovies.size; elements.likedCounter.textContent = `${total} ${total === 1 ? t("favoritesSingular") : t("favoritesPlural")}`; }
function toggleLike(movieId) { likedMovies.has(movieId) ? likedMovies.delete(movieId) : likedMovies.add(movieId); saveLikedMovies(likedMovies); updateLikedCounter(); drawMovies(); if (openMovieId === movieId && elements.modal.classList.contains("is-open")) elements.modalLike.textContent = likedMovies.has(movieId) ? t("removeFavorite") : t("addFavorite"); if (elements.favoritesModal.classList.contains("is-open")) drawFavorites(); }
function showMovie(movieId) { const movie = movies.find((item) => item.id === movieId); if (!movie) return; openMovieId = movie.id; openMovieModal(elements, movie, likedMovies.has(movie.id), language, t, genreLabel); }
function closeMovie() { closeMovieModal(elements); openMovieId = null; }
async function actualizarGenero(genero) {
  activeGenre = genero;
  renderFilters(elements, genreKeys, activeGenre, genreLabel);
  elements.spinner.classList.add("is-visible");
  elements.grid.style.opacity = "0.35";

  genreMovies = await filtrarPeliculas(movies, activeGenre);
  drawMovies();
  elements.spinner.classList.remove("is-visible");
  elements.grid.style.opacity = "1";
}
async function loadApplicationData() {
  elements.spinner.classList.add("is-visible");
  elements.grid.style.opacity = "0.35";

  const [moviesResult, resenasResult, anunciosResult] = await Promise.allSettled([
    obtenerPeliculas(),
    obtenerResenas(),
    obtenerAnuncios(),
  ]);

  if (moviesResult.status === "fulfilled") {
    movies = moviesResult.value;
    genreMovies = movies;
    genreKeys = ["all", ...new Set(movies.map((movie) => movie.genreKey))];
  }

  if (resenasResult.status === "fulfilled") {
    resenas = resenasResult.value;
  } else {
    console.warn("Las reseñas no pudieron cargarse.", resenasResult.reason);
  }

  if (anunciosResult.status === "fulfilled") {
    anuncios = anunciosResult.value;
  } else {
    console.warn("Los anuncios no pudieron cargarse.", anunciosResult.reason);
  }

  applyLanguage();
  elements.spinner.classList.remove("is-visible");
  elements.grid.style.opacity = "1";
}
function applyLanguage() { document.documentElement.lang = language; elements.brandLink.setAttribute("aria-label", t("brandAria")); elements.languageToggle.textContent = t("languageButton"); elements.heroEyebrow.textContent = t("heroEyebrow"); elements.pageTitle.textContent = t("pageTitle"); elements.heroText.textContent = t("heroText"); elements.catalogSection.setAttribute("aria-label", t("catalogAria")); elements.genresLabel.textContent = t("genresLabel"); elements.catalogTitle.textContent = t("catalogTitle"); elements.searchInput.placeholder = t("searchPlaceholder"); elements.searchInput.setAttribute("aria-label", t("searchAria")); elements.searchButton.textContent = t("searchButton"); elements.filters.setAttribute("aria-label", t("filtersAria")); elements.spinnerText.textContent = t("loading"); elements.movieCloseButton.setAttribute("aria-label", t("closeModal")); elements.favoritesCloseButton.setAttribute("aria-label", t("closeFavorites")); elements.favoritesEyebrow.textContent = t("favoritesEyebrow"); elements.favoritesTitle.textContent = t("favoritesTitle"); renderFilters(elements, genreKeys, activeGenre, genreLabel); updateLikedCounter(); drawMovies(); if (openMovieId && elements.modal.classList.contains("is-open")) showMovie(openMovieId); if (elements.favoritesModal.classList.contains("is-open")) drawFavorites(); }

elements.filters.addEventListener("click", (event) => { const button = event.target.closest("[data-genre]"); if (!button) return; actualizarGenero(button.dataset.genre); });
elements.searchForm.addEventListener("submit", (event) => { event.preventDefault(); searchTerm = elements.searchInput.value; showSpinner(elements, drawMovies); });
elements.grid.addEventListener("click", (event) => { const like = event.target.closest("[data-like]"); if (like) { toggleLike(Number(like.dataset.like)); return; } const card = event.target.closest("[data-open]"); if (card) showMovie(Number(card.dataset.open)); });
elements.grid.addEventListener("keydown", (event) => { if (event.key !== "Enter" && event.key !== " ") return; const card = event.target.closest("[data-open]"); if (!card || event.target.closest("[data-like]")) return; event.preventDefault(); showMovie(Number(card.dataset.open)); });
elements.modal.addEventListener("click", (event) => { if (event.target.closest("[data-close-modal]")) closeMovie(); });
elements.likedCounter.addEventListener("click", () => { drawFavorites(); openFavoritesModal(elements); });
elements.languageToggle.addEventListener("click", () => { language = language === "es" ? "en" : "es"; saveLanguage(language); applyLanguage(); });
elements.favoritesModal.addEventListener("click", (event) => { const remove = event.target.closest("[data-remove-favorite]"); if (remove) toggleLike(Number(remove.dataset.removeFavorite)); if (event.target.closest("[data-close-favorites]")) closeFavoritesModal(elements); });
elements.modalLike.addEventListener("click", () => toggleLike(Number(elements.modalLike.dataset.movieId)));
window.addEventListener("keydown", (event) => { if (event.key === "Escape" && elements.modal.classList.contains("is-open")) closeMovie(); if (event.key === "Escape" && elements.favoritesModal.classList.contains("is-open")) closeFavoritesModal(elements); });

applyLanguage();
loadApplicationData();
