import { createContext, useContext, useReducer } from "react";

const TodoContext= createContext({});

function todoReducer(todos, action){
    let prevTodos= [...todos];

    switch(action.type){
        case 'init' :{
            console.log("Initializing Todo");
            return action.todos;
        }
        case 'delete' :{
            console.log("Deleting todo id: "+action.id);

            return todos.filter((todo)=> todo.id !== action.id);
        }
        case 'add' :{
            let newTask= {
                id : prevTodos[0].id + 1,
                todo: action.value,
                completed: false
            }
            
            prevTodos.unshift(newTask);
            return prevTodos;
        }
        case 'mark' :{
            console.log("Marking Item");
            
            prevTodos.forEach((todo, index, arr)=>{
                if(todo.id === action.id) arr[index]= {...todo, completed : action.status};
            });
            return prevTodos;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export function TodoState({children}){
    console.log("Todo State");
    const [todos, dispatchTodo]= useReducer(todoReducer, []);
    return(
        <TodoContext.Provider value={{ list: todos, dispatch: dispatchTodo }}>
                {children}
        </TodoContext.Provider>
    );
}

export function useTodoContext(){
    return useContext(TodoContext);
}
