import React, { useState } from 'react';
import './Dropdown.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

const Dropdown = ({ trigger, menu }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
  
  export default Dropdown;

  

/*<Menu>
        <a className="menu-item" href="/"> Home </a>
        <a className='menu-item'> <h3>Choose a Route</h3>
          <Dropdown
              trigger={<button>ROUTES</button>}
              menu={[
                <button onClick={() => setFlag(1)}>16:PERAMA-PANEPISTIMIO</button>,
                <button onClick={() => setFlag(2)}>17</button>
                
              ]} /></a>
      </Menu>
*/