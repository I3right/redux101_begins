const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) =>{
    console.log(action);
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                task: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return{
                ...state,
                task: state.tasks.filter(e=>e.id !== action.payload)
            };
        default:
            return state
    }
};

export default taskReducer;