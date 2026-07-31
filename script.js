const movies = [
  {
    id: 1,
    title: { es: "Dune: Parte Dos", en: "Dune: Part Two" },
    genreKey: "sciFi",
    year: 2024,
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    description: {
      es: "Paul Atreides se une a Chani y a los Fremen mientras busca venganza y enfrenta una decisión que cambiará el destino de Arrakis.",
      en: "Paul Atreides joins Chani and the Fremen while seeking revenge and facing a choice that will change Arrakis forever.",
    },
  },
  {
    id: 2,
    title: { es: "Spider-Man: A través del Spider-Verso", en: "Spider-Man: Across the Spider-Verse" },
    genreKey: "animation",
    year: 2023,
    rating: "8.7",
    poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    description: {
      es: "Miles Morales cruza el multiverso y descubre una red de héroes arácnidos con ideas opuestas sobre el sacrificio.",
      en: "Miles Morales crosses the multiverse and meets a network of spider heroes with opposing ideas about sacrifice.",
    },
  },
  {
    id: 3,
    title: { es: "John Wick 4", en: "John Wick 4" },
    genreKey: "action",
    year: 2023,
    rating: "7.7",
    poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    description: {
      es: "John Wick encuentra un camino para derrotar a la Alta Mesa, pero antes debe enfrentar a nuevos enemigos en todo el mundo.",
      en: "John Wick finds a way to defeat the High Table, but first he must face new enemies around the world.",
    },
  },
  {
    id: 4,
    title: { es: "Oppenheimer", en: "Oppenheimer" },
    genreKey: "drama",
    year: 2023,
    rating: "8.1",
    poster: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    description: {
      es: "El físico J. Robert Oppenheimer lidera el Proyecto Manhattan y queda marcado por las consecuencias de su creación.",
      en: "Physicist J. Robert Oppenheimer leads the Manhattan Project and is marked by the consequences of his creation.",
    },
  },
  {
    id: 5,
    title: { es: "Barbie", en: "Barbie" },
    genreKey: "comedy",
    year: 2023,
    rating: "7.0",
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    description: {
      es: "Barbie viaja al mundo real y descubre preguntas inesperadas sobre identidad, propósito y libertad.",
      en: "Barbie travels to the real world and discovers unexpected questions about identity, purpose, and freedom.",
    },
  },
  {
    id: 6,
    title: { es: "El Conjuro", en: "The Conjuring" },
    genreKey: "horror",
    year: 2013,
    rating: "7.5",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description: {
      es: "Dos investigadores paranormales ayudan a una familia aterrorizada por una presencia oscura en su granja.",
      en: "Two paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
    },
  },
  {
    id: 7,
    title: { es: "Misión Imposible: Sentencia Mortal", en: "Mission: Impossible - Dead Reckoning" },
    genreKey: "action",
    year: 2023,
    rating: "7.5",
    poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    description: {
      es: "Ethan Hunt y su equipo persiguen una amenaza tecnológica capaz de alterar el equilibrio global.",
      en: "Ethan Hunt and his team pursue a technological threat capable of changing the global balance.",
    },
  },
  {
    id: 8,
    title: { es: "Elementos", en: "Elemental" },
    genreKey: "animation",
    year: 2023,
    rating: "7.6",
    poster: "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    description: {
      es: "En una ciudad donde conviven fuego, agua, tierra y aire, dos jóvenes descubren que tienen más en común de lo que parece.",
      en: "In a city where fire, water, earth, and air live together, two young people discover they share more than expected.",
    },
  },
];

const translations = {
  es: {
    brandAria: "Inicio de CineNova",
    languageButton: "EN",
    favoritesSingular: "favorita",
    favoritesPlural: "favoritas",
    heroEyebrow: "Cartelera seleccionada",
    pageTitle: "Encuentra tu próxima película",
    heroText: "Explora películas por género, guarda tus favoritas y abre cada ficha para ver más detalles.",
    catalogAria: "Catálogo de películas",
    genresLabel: "Géneros",
    catalogTitle: "Películas destacadas",
    searchPlaceholder: "Buscar película...",
    searchAria: "Buscar película",
    searchButton: "Buscar",
    filtersAria: "Filtros por género",
    loading: "Cargando películas...",
    noResults: "No se encontraron películas con esos filtros.",
    likeAria: "Me gusta",
    posterAlt: "Poster de",
    addFavorite: "Agregar a favoritas",
    removeFavorite: "Quitar de favoritas",
    closeModal: "Cerrar modal",
    closeFavorites: "Cerrar favoritos",
    favoritesEyebrow: "Tus selecciones",
    favoritesTitle: "Películas favoritas",
    noFavorites: "Todavía no seleccionaste películas favoritas.",
    remove: "Quitar",
    genres: {
      all: "Todas",
      sciFi: "Ciencia ficción",
      animation: "Animación",
      action: "Acción",
      drama: "Drama",
      comedy: "Comedia",
      horror: "Terror",
    },
  },
  en: {
    brandAria: "CineNova home",
    languageButton: "ES",
    favoritesSingular: "favorite",
    favoritesPlural: "favorites",
    heroEyebrow: "Selected lineup",
    pageTitle: "Find your next movie",
    heroText: "Browse movies by genre, save your favorites, and open each card to see more details.",
    catalogAria: "Movie catalog",
    genresLabel: "Genres",
    catalogTitle: "Featured movies",
    searchPlaceholder: "Search movie...",
    searchAria: "Search movie",
    searchButton: "Search",
    filtersAria: "Genre filters",
    loading: "Loading movies...",
    noResults: "No movies were found with those filters.",
    likeAria: "Like",
    posterAlt: "Poster for",
    addFavorite: "Add to favorites",
    removeFavorite: "Remove from favorites",
    closeModal: "Close modal",
    closeFavorites: "Close favorites",
    favoritesEyebrow: "Your picks",
    favoritesTitle: "Favorite movies",
    noFavorites: "You have not selected favorite movies yet.",
    remove: "Remove",
    genres: {
      all: "All",
      sciFi: "Science fiction",
      animation: "Animation",
      action: "Action",
      drama: "Drama",
      comedy: "Comedy",
      horror: "Horror",
    },
  },
};

const grid = document.querySelector("#movieGrid");
const filters = document.querySelector("#filters");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const spinner = document.querySelector("#spinner");
const spinnerText = document.querySelector("#spinnerText");
const likedCounter = document.querySelector("#likedCounter");
const languageToggle = document.querySelector("#languageToggle");
const brandLink = document.querySelector("#brandLink");
const heroEyebrow = document.querySelector("#heroEyebrow");
const pageTitle = document.querySelector("#pageTitle");
const heroText = document.querySelector("#heroText");
const catalogSection = document.querySelector("#catalogSection");
const genresLabel = document.querySelector("#genresLabel");
const catalogTitle = document.querySelector("#catalogTitle");
const movieCloseButton = document.querySelector("#movieCloseButton");
const favoritesCloseButton = document.querySelector("#favoritesCloseButton");
const favoritesEyebrow = document.querySelector("#favoritesEyebrow");
const favoritesTitle = document.querySelector("#favoritesTitle");
const modal = document.querySelector("#movieModal");
const modalPoster = document.querySelector("#modalPoster");
const modalGenre = document.querySelector("#modalGenre");
const modalYear = document.querySelector("#modalYear");
const modalRating = document.querySelector("#modalRating");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalLike = document.querySelector("#modalLike");
const favoritesModal = document.querySelector("#favoritesModal");
const favoritesGrid = document.querySelector("#favoritesGrid");

let language = localStorage.getItem("language") || "es";
let activeGenre = "all";
let searchTerm = "";
let openMovieId = null;
const likedMovies = new Set(JSON.parse(localStorage.getItem("likedMovies") || "[]"));
const genreKeys = ["all", ...new Set(movies.map((movie) => movie.genreKey))];

function t(key) {
  return translations[language][key];
}

function genreLabel(genreKey) {
  return translations[language].genres[genreKey];
}

function saveLikes() {
  localStorage.setItem("likedMovies", JSON.stringify([...likedMovies]));
}

function updateLikedCounter() {
  const total = likedMovies.size;
  const label = total === 1 ? t("favoritesSingular") : t("favoritesPlural");
  likedCounter.textContent = `${total} ${label}`;
}

function getLikedMovieList() {
  return movies.filter((movie) => likedMovies.has(movie.id));
}

function showSpinner(callback) {
  spinner.classList.add("is-visible");
  grid.style.opacity = "0.35";

  window.setTimeout(() => {
    callback();
    spinner.classList.remove("is-visible");
    grid.style.opacity = "1";
  }, 450);
}

function createFilterButtons() {
  filters.innerHTML = genreKeys
    .map(
      (genreKey) => `
        <button class="filter-btn ${genreKey === activeGenre ? "is-active" : ""}" type="button" data-genre="${genreKey}">
          ${genreLabel(genreKey)}
        </button>
      `,
    )
    .join("");
}

function getFilteredMovies() {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return movies.filter((movie) => {
    const matchesGenre = activeGenre === "all" || movie.genreKey === activeGenre;
    const searchableText = `${movie.title[language]} ${genreLabel(movie.genreKey)} ${movie.description[language]}`.toLowerCase();
    const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);

    return matchesGenre && matchesSearch;
  });
}

function renderMovies() {
  const filteredMovies = getFilteredMovies();

  if (!filteredMovies.length) {
    grid.innerHTML = `
      <div class="empty-state">
        ${t("noResults")}
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredMovies
    .map((movie) => {
      const isLiked = likedMovies.has(movie.id);
      return `
        <article class="movie-card" data-open="${movie.id}" role="button" tabindex="0" aria-label="${movie.title[language]}">
          <div class="poster-wrap">
            <img src="${movie.poster}" alt="${t("posterAlt")} ${movie.title[language]}" loading="lazy" />
            <span class="rating">${movie.rating}</span>
          </div>
          <div class="card-body">
            <h3 class="movie-title">${movie.title[language]}</h3>
            <div class="movie-info">
              <span class="genre-pill">${genreLabel(movie.genreKey)}</span>
              <span>${movie.year}</span>
            </div>
            <p class="movie-description">${movie.description[language]}</p>
            <div class="card-actions">
              <button class="like-btn ${isLiked ? "is-liked" : ""}" type="button" data-like="${movie.id}" aria-label="${t("likeAria")} ${movie.title[language]}">
                ${isLiked ? "♥" : "♡"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function toggleLike(movieId) {
  if (likedMovies.has(movieId)) {
    likedMovies.delete(movieId);
  } else {
    likedMovies.add(movieId);
  }

  saveLikes();
  updateLikedCounter();
  renderMovies();

  if (openMovieId === movieId && modal.classList.contains("is-open")) {
    modalLike.textContent = likedMovies.has(movieId) ? t("removeFavorite") : t("addFavorite");
  }

  if (favoritesModal.classList.contains("is-open")) {
    renderFavorites();
  }
}

function openModal(movieId) {
  const movie = movies.find((item) => item.id === movieId);
  if (!movie) return;

  openMovieId = movie.id;
  modalPoster.src = movie.poster;
  modalPoster.alt = `${t("posterAlt")} ${movie.title[language]}`;
  modalGenre.textContent = genreLabel(movie.genreKey);
  modalYear.textContent = movie.year;
  modalRating.textContent = `${movie.rating}/10`;
  modalTitle.textContent = movie.title[language];
  modalDescription.textContent = movie.description[language];
  modalLike.dataset.movieId = movie.id;
  modalLike.textContent = likedMovies.has(movie.id) ? t("removeFavorite") : t("addFavorite");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openMovieId = null;
}

function renderFavorites() {
  const favoriteMovies = getLikedMovieList();

  if (!favoriteMovies.length) {
    favoritesGrid.innerHTML = `
      <div class="empty-state">
        ${t("noFavorites")}
      </div>
    `;
    return;
  }

  favoritesGrid.innerHTML = favoriteMovies
    .map(
      (movie) => `
        <article class="favorite-card">
          <img src="${movie.poster}" alt="${t("posterAlt")} ${movie.title[language]}" loading="lazy" />
          <div class="favorite-body">
            <h4>${movie.title[language]}</h4>
            <p>${genreLabel(movie.genreKey)} · ${movie.year}</p>
            <button class="remove-favorite" type="button" data-remove-favorite="${movie.id}">
              ${t("remove")}
            </button>
          </div>
        </article>
      `,
    )
    .join("");
}

function openFavoritesModal() {
  renderFavorites();
  favoritesModal.classList.add("is-open");
  favoritesModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeFavoritesModal() {
  favoritesModal.classList.remove("is-open");
  favoritesModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function applyLanguage() {
  document.documentElement.lang = language;
  brandLink.setAttribute("aria-label", t("brandAria"));
  languageToggle.textContent = t("languageButton");
  heroEyebrow.textContent = t("heroEyebrow");
  pageTitle.textContent = t("pageTitle");
  heroText.textContent = t("heroText");
  catalogSection.setAttribute("aria-label", t("catalogAria"));
  genresLabel.textContent = t("genresLabel");
  catalogTitle.textContent = t("catalogTitle");
  searchInput.placeholder = t("searchPlaceholder");
  searchInput.setAttribute("aria-label", t("searchAria"));
  searchButton.textContent = t("searchButton");
  filters.setAttribute("aria-label", t("filtersAria"));
  spinnerText.textContent = t("loading");
  movieCloseButton.setAttribute("aria-label", t("closeModal"));
  favoritesCloseButton.setAttribute("aria-label", t("closeFavorites"));
  favoritesEyebrow.textContent = t("favoritesEyebrow");
  favoritesTitle.textContent = t("favoritesTitle");

  createFilterButtons();
  updateLikedCounter();
  renderMovies();

  if (openMovieId && modal.classList.contains("is-open")) {
    openModal(openMovieId);
  }

  if (favoritesModal.classList.contains("is-open")) {
    renderFavorites();
  }
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-genre]");
  if (!button) return;

  activeGenre = button.dataset.genre;
  createFilterButtons();
  showSpinner(renderMovies);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = searchInput.value;
  showSpinner(renderMovies);
});

grid.addEventListener("click", (event) => {
  const likeButton = event.target.closest("[data-like]");
  if (likeButton) {
    toggleLike(Number(likeButton.dataset.like));
    return;
  }

  const card = event.target.closest("[data-open]");
  if (card) {
    openModal(Number(card.dataset.open));
  }
});

grid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest("[data-open]");
  if (!card || event.target.closest("[data-like]")) return;

  event.preventDefault();
  openModal(Number(card.dataset.open));
});

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

likedCounter.addEventListener("click", openFavoritesModal);

languageToggle.addEventListener("click", () => {
  language = language === "es" ? "en" : "es";
  localStorage.setItem("language", language);
  applyLanguage();
});

favoritesModal.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-favorite]");

  if (removeButton) {
    toggleLike(Number(removeButton.dataset.removeFavorite));
  }

  if (event.target.closest("[data-close-favorites]")) {
    closeFavoritesModal();
  }
});

modalLike.addEventListener("click", () => {
  toggleLike(Number(modalLike.dataset.movieId));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }

  if (event.key === "Escape" && favoritesModal.classList.contains("is-open")) {
    closeFavoritesModal();
  }
});

applyLanguage();
showSpinner(renderMovies);
