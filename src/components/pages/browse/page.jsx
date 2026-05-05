import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../../hooks/usePopularMovies";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies";
import useUpcommingMovies from "../../../hooks/useUpcommingMovies";
import Header from "../Header/page";
import MainConatiner from "../MainContainer.js/page";
import SecondaryContainer from "../SecondaryContainer.js/page";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies ();
  useTopRatedMovies();
  useUpcommingMovies();

  return (
    <div className="w-screen min-h-screen">
      <Header />

      <MainConatiner />

      <SecondaryContainer />
    </div>
  );
};

export default Browse;
