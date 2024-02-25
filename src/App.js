import { useEffect } from 'react';
import './App.css';

function Header() {
  return(
    <header>
      <h1>My Todo</h1>
      <nav>
        <ul id='panel'>
          <li className='selected'>All</li>
          <li>Pending</li>
          <li>Accomplished</li>
        </ul>
      </nav>
    </header>
  );  
}

function App() {
  useEffect(()=>{
    fetch("https://dummyjson.com/todos")
    .then((res)=> res.json())
    .then((data)=> console.log(data.todos));
  });

  return (
    <>
      <Header />
      <section>
        
      </section>
    </>
  );
}

export default App;
