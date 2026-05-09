import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((state) => state.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const res = await fetch(
      NOW_PLAYING_MOVIES,
      API_OPTIONS,
    );

    const data = await res.json();
    dispatch(addNowPlayingMovies(data.results || null));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
