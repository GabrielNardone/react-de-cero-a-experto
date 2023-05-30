import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true

            //* redux te permite hacerlo así. Con el useReducer habría que hacer
            //* return {
            //*     ...state,
            //*     isLoading: true
            //* }
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;