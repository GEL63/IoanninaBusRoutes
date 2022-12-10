import React from 'react';
//FOR NAVBAR (MENU ON TOP OF WEB PAGE)
import Navbar from './index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Find from './pages/find';
import StandBy from './pages/standby';
import SignUp from './pages/signup';
import Display from './pages/display';

import SideMenu from './SideMenu';
function TopNav(){
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/find' component={Find} />
            <Route path='/standby' component={StandBy} />
            <Route path='/sign-up' component={SignUp} />
          </Routes>
          
        <SideMenu/>
        </Router>
       
      );
}
export default TopNav; 