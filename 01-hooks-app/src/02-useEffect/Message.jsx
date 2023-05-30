import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords);
        }

        window.addEventListener('mousemove', onMouseMove)

        //* limpiar el listener para evitar que siga consumiendo memoria.
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])


    return (

        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
