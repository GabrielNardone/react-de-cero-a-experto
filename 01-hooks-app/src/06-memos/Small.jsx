import React from 'react';
// import { memo } from 'react'; //* otra opción válida, que ejecutamos escribiendo únicamente memo

//* Memo memoriza el componente y solo lo renderiza si se modifican las props
//* esto es util porque en el componente padre si algo se modifica que no tiene nada que ver
//* con este componente hijo, el componente hijo se volvería a ejecutar a menos que esté
//* memorizado
//* EL MEMO MEMORIZA COMPONENTES, EL USEMEMO MEMORIZA VALORES
export const Small = React.memo(({ value }) => {

    console.log(' Me volví a dibujar :( ');

    return (
        <small>{ value }</small>
    )
})
