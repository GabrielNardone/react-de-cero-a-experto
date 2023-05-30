/*el REDUCER es similar al useState pero es más útil cuando son varias acciones las que
modifican el estado. Justamente la idea es tener controlado en un solo lugar todas las acciones
que modifican el state de mi app.
ES UNA FUNCIÓN PURA. Debe poder resolver todo sin llamar otras funciones. No debe tener efectos secundarios.
NO DEBE REALIZAR TAREAS ASÍNCRONAS.
DEBE DE RETORNAR SIEMPRE UN NUEVO ESTADO. No debe mutar el estado.
NO DEBE LLAMAR EL LOCAL O SESSION STORAGE INTERNAMENTE.
NO DEBE REQUERIRSE MÁS QUE UNA ACCIÓN para modificar el state.
*/

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer( todos, addTodoAction );


console.log({state: todos})





