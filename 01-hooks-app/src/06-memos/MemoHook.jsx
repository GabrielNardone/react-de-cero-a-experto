import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';


const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}



export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [ show, setShow ] = useState(true);

    //* useMemo memoriza un valor, es decir, lo que sea que se retorne, y ese valor se mantiene
    //* a menos que las dependencias cambien. Esto evita que un proceso pesado dentro de un componente
    //* se redidibuje si otro proceso independiente dentro del mismo componente cambia.
    const memorizedValue = useMemo( () => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small>  </h1>
            <hr />

            <h4>{ memorizedValue }</h4>


            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show )  }
            >
                Show/Hide { JSON.stringify(show) } 
            </button>
        
        </>
    )
}
