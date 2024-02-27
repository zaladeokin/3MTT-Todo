import { memo } from 'react';
import '../css/Header.css';

const Header= memo(function Header() {
  console.log("Header mount");
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
});

export default Header;