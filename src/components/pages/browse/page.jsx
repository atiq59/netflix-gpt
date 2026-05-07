import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import usePopularMovies from "../../../hooks/usePopularMovies";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies";
import useUpcommingMovies from "../../../hooks/useUpcommingMovies";
import GptSearch from "../GptSearch/page";
import Header from "../Header/page";
import MainConatiner from "../MainContainer.js/page";
import SecondaryContainer from "../SecondaryContainer.js/page";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

  return (
    <div className="w-screen min-h-screen">
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainConatiner />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
