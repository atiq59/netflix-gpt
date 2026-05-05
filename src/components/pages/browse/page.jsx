import useNowPlayingMovies from "../../../hooks/useNowPlayingMovies";
import Header from "../Header/page";
import MainConatiner from "../MainContainer.js/page";
import SecondaryContainer from "../SecondaryContainer.js/page";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />

      <MainConatiner />

      <SecondaryContainer />
    </div>
  );
};

export default Browse;
