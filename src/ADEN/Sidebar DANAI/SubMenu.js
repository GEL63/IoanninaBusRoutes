import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import {SidebarLink,SidebarLabel,DropdownLink} from './SidebarStyle';
import Dropdown from './Dropdown';
import Button from './Button.js.js';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
     <SidebarLink onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
        {subnav && item.subNav.map((item, index) => {
          return (
            
            <DropdownLink key={index}>
              {item.icon}
              
              <SidebarLabel>{item.title}</SidebarLabel>
              
            </DropdownLink>
            
          );
        })}
        
    </>
  );
};


export default SubMenu;

/**/