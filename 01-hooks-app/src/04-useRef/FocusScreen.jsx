import { useRef } from 'react';

export const FocusScreen = () => {

    //* ES COMO UN USE STATE PERO QUE NO DISPARA LA RENDERIZACIÓN DE NUEVO.
    //* NOS PERMITE MANTENER UNA REFERENCIA, Y CUANDO ESA REFERENCIA CAMBIA
    //* NO SE DISPARE UNA RE-RENDERIZACIÓN DE NUESTRO COMPONENTE
    const inputRef = useRef();

    const onClick = () => {
        // document.querySelector('input').select(); //*esto agarra el elemento y establece el foco en él
        // console.log(inputRef);
        inputRef.current.select(); //* este código hace lo mismo que el "document.querySelector('input').select()", pero con el useRef
    }


  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={ inputRef } //* SINTAXIS DE REACT, APUNTA EL ELEMENTO HTML
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            Set focus
        </button>

    </>
  )
}
