import { useSelector } from "react-redux";
import useMovieTrailer from "../../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  const trailer = useSelector((state) => state.movies?.trailer)
  useMovieTrailer(movieId);
  
  return (
    <div>
      <iframe
        className="w-screen aspect-video object-cover"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;