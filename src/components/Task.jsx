import { useRef } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/actions";

const Task = () => {
    const dispatch = useDispatch()
    const inputref = useRef(null)

    const addNewTask = () => {
        const task = inputref.current.value.trim();
        // console.log(task);
        if(task !== '') {
            dispatch(addTodo(task));
            inputref.current.value = '';
        }
    }

    return(
        <div className="task-component">
            <div className="add-task">
                <input type="text" placeholder="Add task here..." ref={inputref} className="taskInput" />
                <button onClick={addNewTask}>Add task</button>
            </div>
        </div>
    )
}

export default Task