import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

    //* Necesario para disparar las acciones, como el thunk asíncrono
    const dispatch = useDispatch();

    const {pokemons, page, isLoading} = useSelector(state => state.pokemon);


    //* Uso el useEffect para llamar al thunk
    useEffect(() => {
      dispatch(getPokemons(0))
    }, [])
    


    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>{isLoading ? "Loading..." : ""}</span>

            <ul>
               { pokemons.map(pokemon =>{
                    return <li key={pokemon.url}>
                        {pokemon.name}
                    </li>
                })}
            </ul>

            <button 
            disabled={isLoading}
            onClick={() => dispatch(getPokemons(page))}
            >
                Next: {page}
            </button>

        </>
    )
}
