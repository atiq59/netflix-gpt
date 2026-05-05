import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const res = await fetch(
      POPULAR_MOVIES,
      API_OPTIONS,
    );

    const data = await res.json();
    dispatch(addPopularMovies(data.results || null));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
