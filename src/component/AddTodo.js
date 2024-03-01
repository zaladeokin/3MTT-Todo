import { useState } from 'react';
import { useTodoContext } from '../TodoContext';
import '../css/AddTodo.css';

function AddTodo() {
    const [inp, setInp]= useState('');
    const dispatch= useTodoContext().dispatch;

    const handleInp= (e)=>{
        setInp(e.target.value);
    }

    const handleAdd= ()=>{
        if(inp.length > 0) dispatch({
            type: "add",
            value: inp
        });
    }
    
    return(
        <section id="addTodo">
            <label htmlFor="add">New Task</label>
            <input onChange={handleInp} value={inp} type="text" id="add" placeholder="Enter new todo task" />
            <button onClick={handleAdd}>Add Task</button>
        </section>
    );
}

export default AddTodo;