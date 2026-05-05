import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();

  const getUpcommingMovies = async () => {
    const res = await fetch(
      UPCOMING_MOVIES,
      API_OPTIONS,
    );

    const data = await res.json();
    dispatch(addUpcomingMovies(data.results || null));
  };

  useEffect(() => {
    getUpcommingMovies();
  }, []);
};

export default useUpcommingMovies;
