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

export function crearFiltroPeliculas() {
  const cache = new Map();

  return function filtrarPeliculas(peliculas, genero) {
    if (cache.has(genero)) {
      console.log("Leyendo desde cache...");
      return cache.get(genero);
    }

    console.log("Consultando servidor...");
    return new Promise((resolve) => {
      window.setTimeout(() => {
        const resultado = peliculas.filter(
          (pelicula) => genero === "all" || pelicula.genreKey === genero,
        );

        cache.set(genero, resultado);
        resolve(resultado);
      }, 400);
    });
  };
}
