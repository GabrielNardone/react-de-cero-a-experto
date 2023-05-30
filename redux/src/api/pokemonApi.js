import axios from 'axios';

//* Esto me permite crear una configuración estándar para no estar repitiendo el código
export const pokemonApi = axios.create({
    baseURL: `https://pokeapi.co/api/v2`
})