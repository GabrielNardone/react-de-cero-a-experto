import { useState } from "react"


export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = counter;



    return (
        <>
            <h2>Counter: {counter1}</h2>
            <h2>Counter: {counter2}</h2>
            <h2>Counter: {counter3}</h2>

            <hr />

            <button className="btn"
                onClick={
                    () => setCounter({
                        ...counter,
                        counter1: counter1 + 1,

                        // FORMA PRIMITIVA CORRECTA
                        // counter1: counter1 + 1,
                        // counter2: counter2,
                        // counter3: counter3,
                    })

                }>+1</button>


        </>
    )
}
