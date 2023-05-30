//* El store es la fuente de la verdad, cuando se necesite cualquier pieza del STATE que debamos
//* compartir con otros componentes, este es el lugar donde se encontrará. Cuando necesitemos 
//* cualquier información de state, hay que buscarla en el store.

//* Una vez creado el store, hay que establecer el Provider como high order component para
//* que sus componentes hijos tengan acceso al store. Esto se hace normalmente en el main.jsx


import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokeSlice'

export const store = configureStore({

    // así colocamos los slice en nuestro store para que cualquier componente tenga acceso a ellos
    // el siguiente paso es utilizarlos en los componentes, procedimiento para el cual utilizamos 
    // dos hooks: useSelector y useDispatch
  reducer: {
    counter : counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
})