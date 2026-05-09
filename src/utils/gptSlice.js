import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        tmdbMoviesData: null
        
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const { gptMovies, tmdbMoviesData } = action.payload;
            state.gptMovies = gptMovies;
            state.tmdbMoviesData = tmdbMoviesData;
        }
    }
})

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;