import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    //* useCallback está dentro de la categoría de los hooks que memorian valores.
    //* sirve para memoirzar funciones más que valores. En efecto, cada vez que cambia el estado
    //* y el componente se re-renderiza las funciones y objetos se vuelven a dibujar, es decir,
    //* son nuevas y apuntan a lugares de memoria diferente. Por eso, la función incrementFather
    //* que enviamos como valor a <ShowIncremente/> es siempre diferente, por tanto el componente
    //* hijo se volverá a renderizar a pesar de que esté memorizado con React.memo. Esto puede
    //* solucionarse si MEMORIZAMOS LA FUNCIÓN a través de useCallback, haciendo que ocupe siempre
    //* el mismo lugar en memoria.
    //* Debemos pensar en el useCallback en las ocasiones en que mandamos una función como prop de un componente.
    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather])

    return (
        <>
            <h1>useCallback Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    )
}
