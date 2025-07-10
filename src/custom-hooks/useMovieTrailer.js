import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const movieVideos = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const data = await movieVideos.json();

    const trailerList = data.results.filter((video) => {
      return video.type.toLowerCase() === "trailer";
    });

    const trailer = trailerList.length ? trailerList[0] : data.results[0];

    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
