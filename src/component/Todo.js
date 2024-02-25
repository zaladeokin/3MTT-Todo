import '../css/Todo.css'

function Todo({task}) {
    
    return(
        <section className="task">
            <p>
                <strong>{task.id}.&nbsp;</strong>{task.todo}
            </p>
            <div className='status'>
                <span className={task.completed ? 'archieved' : 'pending'}>{task.completed ? "Achieved" : "pending"}</span>
                <button>Delete</button>
                <button>{task.completed ? "Undo" : "Achieved"}</button>
            </div>
        </section>
    );
}

export default Todo;