import { type } from '@testing-library/user-event/dist/type';
import { useTodoContext } from '../TodoContext';
import '../css/Todo.css'

function Todo({task, serial}) {
    const dispatch= useTodoContext().dispatch;

    function handleDelete(id){
        dispatch({
            type : "delete",
            id : id
        });
    }
    
    return(
        <section className="task">
            <p>
                <strong>{serial
                }.&nbsp;</strong>{task.todo}
            </p>
            <div className='status'>
                <span className={task.completed ? 'archieved' : 'pending'}>{task.completed ? "Achieved" : "pending"}</span>
                <button onClick={()=> handleDelete(task.id)}>Delete</button>
                <button>{task.completed ? "Undo" : "Achieved"}</button>
            </div>
        </section>
    );
}

export default Todo;