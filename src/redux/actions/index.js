

export const addTodo = (text) => {
    // console.log(text);
    return {
        type: 'ADD_TASK',
        payload: {
            id: new Date().getTime(),
            text: text,
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: id,
    }
}

// export const ADD_TASK = 'ADD_TASK'
// export const DELETE_TASK = 'DELETE_TASK'

// export const dispatchTask = (param) => {
//     return {
//         type: param.type,
//         payload: param.payload,
//     }
// }
