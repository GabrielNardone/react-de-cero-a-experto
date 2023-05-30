import { useState } from "react";



export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(

        initialForm

        //  {
        //      username: "Gabriel",
        //      email: "",
        //      password: ''
        //  } EL OBJETO ES ENVIDO DESDE AFUERA
    );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }



    return {
        formState,
        onInputChange,
        onResetForm,
        ...formState
    }
}
