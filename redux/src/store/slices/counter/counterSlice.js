//* Los slices nos permite crear una serie de reducers, nos permite definir el
//* initialState y nos permite definir un nombre con el cual las acciones van 
//* a salir disparadas a ese lugar e identificar esa acción en el react-redux
//* devTools.

//* Luego de creado, para poder usarlos debemos colocarlo en nuestro store


//* importación del createSlice
import { createSlice } from '@reduxjs/toolkit'

//* Definición del estado inicial
const initialState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload
    },
  },
})

//* Aquí exportamos el counterSlice que creamos con sus acciones desestructuradas
export const { increment, decrement, incrementByAmount } = counterSlice.actions