import { createContext, useContext, useReducer } from "react";

const TodoContext= createContext({});

function todoReducer(todo, action){
    let prevTodo= [...todo]
    switch(action.type){
        case 'init' :{
            console.log("Initializing Todo");
            return action.todos;
        }
        case 'delete' :{
            console.log("Deleting todo id: "+action.id);
            return todo;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export function TodoState({children}){

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
