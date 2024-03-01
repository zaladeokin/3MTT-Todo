export async function init(url, dispatch){
    try {
        let data= await fetch(url);
        data= await data.json();
        dispatch({
            type: "init",
            todos: data.todos.reverse()
        });
    } catch (error) {
        if(process.env.NODE_ENV === 'development') console.log(error);
        else console.log('An error occur');
        dispatch({
            type: "init",
            todos: []
        });
        
    }
}