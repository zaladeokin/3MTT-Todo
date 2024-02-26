import { useEffect } from 'react';
import { useTodoContext } from './TodoContext';

import './css/App.css';

import Header from './component/Header';
import Todo from './component/Todo';

function App() {
  console.log("App mount");
  const todos= useTodoContext().list;
  const dispatch= useTodoContext().dispatch;


  useEffect(()=>{
    console.log("App useEffect");
    fetch("https://dummyjson.com/todos/user/1?limit=5")
    .then((res)=> res.json())
    .then((data)=> dispatch({
      type: "init",
      todos: data.todos
    }));
  }, [dispatch]);


  return (
    <>
      <Header />
      <section className='task-container'>
        { todos.length > 0 ? todos.map((task, index)=> (<Todo task={task} serial={index + 1} key={task.id} />)) : "nff" }
      </section>
    </>
  );
}

export default App;
