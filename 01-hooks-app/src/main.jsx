import React from 'react'
import ReactDOM from 'react-dom/client'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'

import './index.css'
import { Padre } from './07-tarea-memo/Padre'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>
)
