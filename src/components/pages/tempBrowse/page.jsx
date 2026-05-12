import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../../../hooks/usePopularMovies.js";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies.js";
import useUpcommingMovies from "../../../hooks/useUpcommingMovies.js";
import GptSearch from "../GptSearch/page.jsx";
import Header from "../tempHeader/page.jsx";
import MainConatiner from "../MainContainer.js/page.jsx";
import SecondaryContainer from "../SecondaryContainer.js/page.jsx";

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
