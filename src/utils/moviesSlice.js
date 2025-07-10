import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = null;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, removeNowPlayingMovies, addTrailerVideo } =
  moviesSlice.actions;
export default moviesSlice.reducer;
