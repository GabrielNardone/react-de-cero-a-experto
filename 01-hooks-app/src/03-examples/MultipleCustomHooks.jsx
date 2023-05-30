import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
//SE RECOMIENDA CREAR EN CADA CARPETA UN ARCHIVO INDEX QUE CONTENGA TODAS LAS EXPORTACIONES
//DE FORMA QUE AL IMPORTAR SE IMPORTEN TODAS DE UNA MISMA FUENTE Y SE REDUZCAN LAS LÍNEAS
//DE CÓDIGO




export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {isLoading ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
                : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer"> {author}</footer>
                    </blockquote>//LAS DOS PARTES DE ESTA FUNCIÓN PODRÍAN Y DEBERÍAN CONVERTIRSE EN UN COMPONENTE CADA UNA
                //QUE SE IMPORTE Y EL CÓDIGO SEA MÁS FÁCIL DE LEER
                )}
                
                

            <button
                className="btn btn-primary"
                disabled={isLoading} //SI ESTA CARGANDO NO SE PODRÁ HACER CLICK
                onClick={() => increment()}
            >
                Next quote
            </button>



        </>
    )
}
