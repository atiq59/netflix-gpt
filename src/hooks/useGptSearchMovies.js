import { useDispatch } from "react-redux";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constant";
import { useState } from "react";
import { addGptMovieResults } from "../utils/gptSlice";

const useGptSearchMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const searchMoviesTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const res = await data.json();

    return res.results;
  };

  const handleSearch = async (searchText) => {
    setLoading(true);
    try {
      
      const gptQuery = `Act as a movie recommendation engine and suggest some movies for the query: ${searchText} and don't ask questions just give me the list of movies of bollywood and hollywood. Only give me names of 5 movies, comma seperated like the example. Example: Movie1, Movie2, Movie3, Movie4, Movie5. Don't give me any explanation just give me the list of movies.`;

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${OPENAI_KEY}`,
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
        },
      );

      const data = await response.json();

      const gptMovies = data.choices[0].message.content
        .split(",")
        .map((movie) => movie.trim());

        const promiseArr = gptMovies.map((movie) => searchMoviesTmdb(movie));

      const tmdbMoviesData = await Promise.all(promiseArr);

      dispatch(
        addGptMovieResults({ gptMovies: gptMovies, tmdbMoviesData: tmdbMoviesData }),
      );

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleSearch }
};

export default useGptSearchMovies;
