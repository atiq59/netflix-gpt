import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, VIDEO_URL } from "../utils/constant";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies.trailer);

  const getVideo = async () => {
    const response = await fetch(VIDEO_URL + movieId + "/videos", API_OPTIONS);
    const data = await response.json();

    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    !trailer && getVideo();
  }, []);
};

export default useMovieTrailer;
