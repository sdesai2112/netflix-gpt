import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlayingNowMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const nowPlayingMovies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const data = await nowPlayingMovies.json();

    console.log(data?.results);
    dispatch(addPlayingNowMovies(data?.results));
  };
};

export default useNowPlayingMovies;
