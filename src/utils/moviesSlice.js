import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    playingNowMovies: null,
  },
  reducers: {
    addPlayingNowMovies: (state, action) => {
      state.playingNowMovies = action.payload;
    },
    removePlayingNowMovies: (state, action) => {
      state.playingNowMovies = null;
    },
  },
});

export const { addPlayingNowMovies, removePlayingNowMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
