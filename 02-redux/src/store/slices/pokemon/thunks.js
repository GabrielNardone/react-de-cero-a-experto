//* Los thunks son funciones con acciones asíncronas que disparan otra acción cuando se resuelve la petición.


import { pokemonApi } from "../../../api/pokemonAPI"
import { setPokemons, startLoadingPokemons } from "./pokeSlice"

//* Función que regresa otra función y que se manda a llamar con un argumento que es el dispatch
//* y el segundo argumento es el getState que lo podemos llamar para obtener todo el rootState
//* es decir alguna pieza de información del state (quién es el usuario, si está autenticado etc.)
export const getPokemons = (page = 0) => {

    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons())

        //* Una vez que se resuelve la petición http hay que hacer el dispatch de la otra acción, el setPokemon
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`);
        // const data = await resp.json();
        // console.log(data);

        //* Esta es la forma de hacer la petición con axios. 
        //* No hace falta hacer el .json porque axios ya hace el formateo
        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)

        dispatch(setPokemons(
            {
                pokemons: data.results,
                page: page + 1
            }
        ))
    }
}