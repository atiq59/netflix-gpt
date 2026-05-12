import { useSelector } from "react-redux";
import MovieList from "../MovieList/page.jsx";

const GptSearchMovieSuggestion = () => {
    const { gptMovies, tmdbMoviesData } = useSelector((store) => store.gpt);

    if(!gptMovies || !tmdbMoviesData) return null;
    
    return (
        <div className="px-8 bg-black/80 mx-8">
            {gptMovies.map((movieName, index) => <MovieList key={index} title={movieName} movies={tmdbMoviesData[index]} />)}
        </div>
    )
}

export default GptSearchMovieSuggestion;