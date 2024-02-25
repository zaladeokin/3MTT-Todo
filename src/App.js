import { useEffect } from 'react';
import { useTodoContext } from './TodoContext';

import './css/App.css';

import Header from './component/Header';
import Todo from './component/Todo';

function App() {
  const todos= useTodoContext();


  useEffect(()=>{
    fetch("https://dummyjson.com/todos/user/1?limit=5")
    .then((res)=> res.json())
    .then((data)=> todos.dispatch({
      type: "init",
      todos: data.todos
    }));
  }, []);

  console.log(todos.list);


  return (
    <>
      <Header />
      <section className='task-container'>
        { todos.list.length > 0 ? todos.list.map((task, index)=> (<Todo task={task} serial={index + 1} key={task.id} />)) : "nff" }
      </section>
    </>
  );
}

export default App;
