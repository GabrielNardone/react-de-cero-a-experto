import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "Gabriel",
        email: "Gabriel@G.com"
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }


    useEffect(() => {
        //console.log("useEffect called");
    }, []); //el arreglo vacío indica que el useEffect solo debe dispararse una vez

    useEffect(() => {
        //console.log("formState changed");
    }, [formState]); //el useEffect se dispara cada vez que hay un cambio en el formState

    useEffect(() => {
        //console.log("emial changed");
    }, [email]); //el useEffect se dispara cada vez que hay un cambio en el email



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input type="email"
                className="form-control mt-2"
                placeholder="email@....com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === "Gabriel1" && <Message/>)
            }

            
        </>
    )
}
