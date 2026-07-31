export function getElements() {
  const selector = (value) => document.querySelector(value);
  return {
    grid: selector("#movieGrid"), filters: selector("#filters"), searchForm: selector("#searchForm"), searchInput: selector("#searchInput"), searchButton: selector("#searchButton"), spinner: selector("#spinner"), spinnerText: selector("#spinnerText"), likedCounter: selector("#likedCounter"), languageToggle: selector("#languageToggle"), brandLink: selector("#brandLink"), heroEyebrow: selector("#heroEyebrow"), pageTitle: selector("#pageTitle"), heroText: selector("#heroText"), catalogSection: selector("#catalogSection"), genresLabel: selector("#genresLabel"), catalogTitle: selector("#catalogTitle"), movieCloseButton: selector("#movieCloseButton"), favoritesCloseButton: selector("#favoritesCloseButton"), favoritesEyebrow: selector("#favoritesEyebrow"), favoritesTitle: selector("#favoritesTitle"), modal: selector("#movieModal"), modalPoster: selector("#modalPoster"), modalGenre: selector("#modalGenre"), modalYear: selector("#modalYear"), modalRating: selector("#modalRating"), modalTitle: selector("#modalTitle"), modalDescription: selector("#modalDescription"), modalLike: selector("#modalLike"), favoritesModal: selector("#favoritesModal"), favoritesGrid: selector("#favoritesGrid"),
  };
}

export function showSpinner(elements, callback) {
  elements.spinner.classList.add("is-visible");
  elements.grid.style.opacity = "0.35";
  window.setTimeout(() => {
    callback();
    elements.spinner.classList.remove("is-visible");
    elements.grid.style.opacity = "1";
  }, 450);
}

export function renderFilters(elements, genreKeys, activeGenre, genreLabel) {
  elements.filters.innerHTML = genreKeys.map((genreKey) => `<button class="filter-btn ${genreKey === activeGenre ? "is-active" : ""}" type="button" data-genre="${genreKey}">${genreLabel(genreKey)}</button>`).join("");
}

export function renderMovies(elements, filteredMovies, likedMovies, language, translate, genreLabel) {
  if (!filteredMovies.length) {
    elements.grid.innerHTML = `<div class="empty-state">${translate("noResults")}</div>`;
    return;
  }
  elements.grid.innerHTML = filteredMovies.map((movie) => {
    const isLiked = likedMovies.has(movie.id);
    return `<article class="movie-card" data-open="${movie.id}" role="button" tabindex="0" aria-label="${movie.title[language]}"><div class="poster-wrap"><img src="${movie.poster}" alt="${translate("posterAlt")} ${movie.title[language]}" loading="lazy" /><span class="rating">${movie.rating}</span></div><div class="card-body"><h3 class="movie-title">${movie.title[language]}</h3><div class="movie-info"><span class="genre-pill">${genreLabel(movie.genreKey)}</span><span>${movie.year}</span></div><p class="movie-description">${movie.description[language]}</p><div class="card-actions"><button class="like-btn ${isLiked ? "is-liked" : ""}" type="button" data-like="${movie.id}" aria-label="${translate("likeAria")} ${movie.title[language]}">${isLiked ? "♥" : "♡"}</button></div></div></article>`;
  }).join("");
}

export function renderFavorites(elements, favoriteMovies, language, translate, genreLabel) {
  if (!favoriteMovies.length) {
    elements.favoritesGrid.innerHTML = `<div class="empty-state">${translate("noFavorites")}</div>`;
    return;
  }
  elements.favoritesGrid.innerHTML = favoriteMovies.map((movie) => `<article class="favorite-card"><img src="${movie.poster}" alt="${translate("posterAlt")} ${movie.title[language]}" loading="lazy" /><div class="favorite-body"><h4>${movie.title[language]}</h4><p>${genreLabel(movie.genreKey)} · ${movie.year}</p><button class="remove-favorite" type="button" data-remove-favorite="${movie.id}">${translate("remove")}</button></div></article>`).join("");
}

export function openMovieModal(elements, movie, isLiked, language, translate, genreLabel) {
  elements.modalPoster.src = movie.poster; elements.modalPoster.alt = `${translate("posterAlt")} ${movie.title[language]}`; elements.modalGenre.textContent = genreLabel(movie.genreKey); elements.modalYear.textContent = movie.year; elements.modalRating.textContent = `${movie.rating}/10`; elements.modalTitle.textContent = movie.title[language]; elements.modalDescription.textContent = movie.description[language]; elements.modalLike.dataset.movieId = movie.id; elements.modalLike.textContent = isLiked ? translate("removeFavorite") : translate("addFavorite");
  elements.modal.classList.add("is-open"); elements.modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}

export function closeMovieModal(elements) { elements.modal.classList.remove("is-open"); elements.modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
export function openFavoritesModal(elements) { elements.favoritesModal.classList.add("is-open"); elements.favoritesModal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
export function closeFavoritesModal(elements) { elements.favoritesModal.classList.remove("is-open"); elements.favoritesModal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
