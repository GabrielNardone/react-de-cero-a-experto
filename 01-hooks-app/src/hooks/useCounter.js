import { useState } from "react"


export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue);

    //PARA INCREMENTAR POR UN NÚMERO A DETERMINAR HACER LO SIGUIENTE
    //en el botton: onClick={() => increment(4)}
    const increment = (value = 1) => {
        setCounter(counter + value)
    };

    const decrement = () => {
        if (counter === 0) return;
        setCounter(counter - 1)
    };

    const reset = () => {
        setCounter(initialValue)
    };



    return {
        counter: counter,
        increment,
        decrement,
        reset,
    };
}