import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  const getPopularMovies = async () => {
    const res = await fetch(
      POPULAR_MOVIES,
      API_OPTIONS,
    );

    const data = await res.json();
    dispatch(addPopularMovies(data.results || null));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
