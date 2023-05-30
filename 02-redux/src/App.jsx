import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/slices/counter/counterSlice';
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement } from './store/slices/counter/counterSlice';
import { incrementByAmount } from './store/slices/counter/counterSlice';

function App() {

  //* el useSelector es para seleccionar alguna pieza del state
  //* el useDsipach nos da acceso a la función dispatch para despachar acciones
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        {/* Mediante el dispatch ejecuto la acción correspondiente */}
        <button onClick={() => { dispatch(increment()) }}>
          +1
        </button>
        <button onClick={() => { dispatch(decrement()) }}>
          -1
        </button>
        <button onClick={() => { dispatch(incrementByAmount(20)) }}>
          +X
        </button>

      </div>
    </>
  )
}

export default App
