import { MenuItem } from '@material-ui/core';
import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './MySide.css';

import TopNav from './TopNavigator';
import {Nav,NavIcon,SidebarNav,SidebarWrap,SidebarLabel,Button} from './TopSide/SidebarStyle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './TopSide/index.js';
import Home from './TopSide/pages';
import About from './TopSide/pages/about';
import Events from './TopSide/pages/events';
import StandBy from './TopSide/pages/standby';
import SignUp from './TopSide/pages/signup';

export default props => {
  const origin = [20.852923,39.665555];
  const destination = [20.8412895,39.6201176];

  const routeChoice = () => {
    myFunc();
  };

  const handleMenuTwo = () => {
    console.log('clicked two');
  };
  function myFunc(){
    return [origin,destination];
  }

  return (
    <Nav>
      
   
    <Menu>
      
        <Dropdown
          trigger={<SidebarLabel>Display Route</SidebarLabel>
          }
          menu={[
            <Button onClick={routeChoice}>16:PERAMA-PANEPISTIMIO</Button>,
            <Button onClick={routeChoice}>16:DIKASTIKO-PANEPISTIMIO</Button>,
            <Button onClick={handleMenuTwo}>17:NEA ZOI-ANATOLI-TEI-PANEPISTIMIO</Button>,
          ]}
        />
      
    </Menu>

    <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/events' component={Events} />
            <Route path='/standby' component={StandBy} />
            <Route path='/sign-up' component={SignUp} />
          </Routes>
        </Router>
    </Nav>
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

/*<a className='menu-item'>
        <h1>Create Charts</h1>
        
        <h3>Select char type</h3>
        <Dropdown
          trigger={<button>Char Type</button>}
          menu={[
            <button onClick={handleMenuOne}>Line Chart</button>,
            <button onClick={handleMenuTwo}>Bar Chart </button>,
          ]}
        />

      </a>
      <a className='menu-item'>
        <h3>Select variables for x-y</h3>
        <Dropdown
          trigger={<button>Variables</button>}
          menu={[
            <button onClick={handleMenuOne}>Time - Crowd</button>,
            <button onClick={handleMenuTwo}>Bus Stops - Crowd</button>,
            <button onClick={handleMenuTwo}>Time - Delay </button>,
          ]}
        />       
       </a>*/