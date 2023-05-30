
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     username: "Gabriel",
    //     email: "",
    //     password: ''
    // });

    // const { username, email, password } = formState;

    // const onInputChange = ({ target }) => {
    //     const { name, value } = target;
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     })
    // }
    //EN VEZ DE UTILIZAR ESTE CÓDIGO HICIMOS UN CUSTOM HOOK LLAMADO "useForm"
    //QUE VAMOS A IMPORTAR

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: 'Gabriel',
        email: '',
        password: ''
    })

    //DESESTRUCTURAR TODO LO QUE ESTÁ DENTRO DEL "formState"
    //const { username, email, password } = formState;

    //OTRA FORMA ES QUE EL "useForm" RETORNE LAS PROPIEDADES DEL OBJETO
    //DE FORMA TAL QUE LAS PODEMOS DESESTRUCTURAR EN LA CONST DE ARRIBA


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
            <h1>Formulario con custom hook</h1>
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

            <input type="password"
                className="form-control mt-2"
                placeholder="Constraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2"> Borrar</button>


        </>
    )
}
