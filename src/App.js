import { useEffect, useState } from 'react';
import { useTodoContext } from './TodoContext';

import './css/App.css';

import Header from './component/Header';
import Todo from './component/Todo';
import AddTodo from './component/AddTodo';

function App() {
  console.log("App mount");
  const [scope, setScope]= useState('all');
  const dispatch= useTodoContext().dispatch;
  let todos= useTodoContext().list;


  useEffect(()=>{
    console.log("App useEffect");
    fetch("https://dummyjson.com/todos/user/1?limit=5")
    .then((res)=> res.json())
    .then((data)=> dispatch({
      type: "init",
      todos: data.todos.reverse()
    }))
    .catch((err)=>{
      if(process.env.NODE_ENV === 'development') console.log(err);
      else{
        console.log('An error occur');
        dispatch({
          type: "init",
          todos: []
        });
      }
    })
  }, [dispatch]);

  const handleScope= (status)=>{
    setScope(v => v= status);
  }

  if(scope === "pending") todos= todos.filter((todo)=> todo.completed === false);
  else if(scope === "accomplished") todos= todos.filter((todo)=> todo.completed === true);

  return (
    <>
      <Header updateScope={handleScope} />
      <AddTodo />
      <section className='task-container'>
        { todos.length > 0 ? todos.map((task, index)=> (<Todo task={task} serial={index + 1} key={task.id} />)) : "nff" }
      </section>
    </>
  );
}

export default App;
