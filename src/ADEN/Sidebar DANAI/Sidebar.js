import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import {Nav,NavIcon,SidebarNav,SidebarWrap} from './SidebarStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MenuItems } from './MenuItems';
import SubMenu from './SubMenu';

import Navbar from './index.js';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import StandBy from './pages/standby';
import SignUp from './pages/signup';

function callRoute(routeName){
  console.log(routeName);
}


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [choice, setChoice] = useState();
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>

          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/events' component={Events} />
            <Route path='/standby' component={StandBy} />
            <Route path='/sign-up' component={SignUp} />
          </Routes>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {MenuItems.map((item, index) => {
              return <SubMenu item={item} key={index} onClick={() => setChoice(index)}/>;
              
            })}
            
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>

      
    </>
  );
};

export default Sidebar;

