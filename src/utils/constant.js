export const NETFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVTAAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const PHOTO_URL =
  "https://lh3.googleusercontent.com/ogw/AF2bZyhjKXdZ76V47lvvXbPQSYZh5kQpV6Xta6Dq3mcdfolaC-NO=s64-c-mo";

export const BACKGROUND_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/e9e4878c-fb84-4457-ba49-564bfd8dc758/web/IN-en-20260420-TRIFECTA-perspective_ec3c1e8c-3b79-481d-84c4-51b7dcb7800e_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_KEY || "",
  },
};

export const NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?&page=1";

export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";

export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?&page=1";

export const SEARCH_TMDB_MOVIES = (movie) =>
  `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;

export const VIDEO_URL = "https://api.themoviedb.org/3/movie/";

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LANGUAGES = [
  { name: "English", code: "en" },
  { name: "Hindi", code: "hindi" },
  { name: "Spanish", code: "spanish" },
];

export const OPENAI_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export const ONENROUTER_API_OPTIONS = (gptQuery) => ({
  method: "POST",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Test App",
  },
  body: JSON.stringify({
    model: "deepseek/deepseek-chat",
    messages: [
      {
        role: "user",
        content: gptQuery,
      },
    ],
    max_tokens: 50,
  }),
});