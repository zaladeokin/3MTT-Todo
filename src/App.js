import { useEffect, useState } from 'react';
import './css/App.css';

import Header from './component/Header';
import Todo from './component/Todo';

function App() {
  const [todos, setTodos]= useState([]);


  useEffect(()=>{
    fetch("https://dummyjson.com/todos/user/1?limit=5")
    .then((res)=> res.json())
    .then((data)=>{
      setTodos(data.todos)
    });
  }, []);

  console.log(todos);


  return (
    <>
      <Header />
      <section className='task-container'>
        { todos.length > 0 ? todos.map((task)=> (<Todo task={task} />)) : "nff" }
      </section>
    </>
  );
}

export default App;
