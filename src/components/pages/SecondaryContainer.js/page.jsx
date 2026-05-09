import { useSelector } from "react-redux";
import MovieList from "../MovieList/page";

const SecondaryContainer = () => {
  const movies = useSelector(
    (state) => state.movies,
  );

  return (
    <div className="bg-black">
      <div className="md:-mt-72 pt-[30%] md:pt-0 relative z-2">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      </div>
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies?.upCommingMovies} />
    </div>
  );
};

export default SecondaryContainer;

{
  /*
  Movie List - Popular
    Movie Card 
  Movie List - Top Rated
    Movie Card 
  Movie List - Upcoming
    Movie Card
  */
}
