import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { PokemonApp } from './PokemonApp'


// import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* El provider funciona como high order component y les provee el store a todos sus children */}
    <Provider store={store}>

      <PokemonApp />

    </Provider>

  </React.StrictMode>,
)
