const LIKED_MOVIES_KEY = "likedMovies";
const LANGUAGE_KEY = "language";

export function loadLanguage() {
  return localStorage.getItem(LANGUAGE_KEY) || "es";
}

export function saveLanguage(language) {
  localStorage.setItem(LANGUAGE_KEY, language);
}

export function loadLikedMovies() {
  return new Set(JSON.parse(localStorage.getItem(LIKED_MOVIES_KEY) || "[]"));
}

export function saveLikedMovies(likedMovies) {
  localStorage.setItem(LIKED_MOVIES_KEY, JSON.stringify([...likedMovies]));
}
