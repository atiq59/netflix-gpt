import { useSelector } from "react-redux";
import VideoTitle from "../VideoTitle/page.jsx";
import VideoBackground from "../VideoBackground.js/page.jsx";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="hidden md:inline-block bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
