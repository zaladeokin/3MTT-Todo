import { memo } from 'react';
import '../css/Header.css';

const Header= memo(function Header({updateScope}) {
  // console.log("Header mount");

  const handleClick= (e, status)=>{
      updateScope(status);
      document.querySelectorAll("#panel li").forEach((li)=>{
        li.classList.remove("selected")
      });
      e.target.classList.add("selected")
  }

  return(
    <header>
      <h1>My Todo</h1>
      <nav>
        <ul id='panel'>
          <li className='selected' onClick={(e)=> handleClick(e, "all")}>All</li>
          <li onClick={(e)=> handleClick(e, "pending")}>Pending</li>
          <li onClick={(e)=> handleClick(e, "accomplished")}>Accomplished</li>
        </ul>
      </nav>
    </header>
  );  
});

export default Header;