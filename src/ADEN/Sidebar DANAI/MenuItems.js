import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const MenuItems = [
  {
    title: 'Display Route',
    path:'/Display',
    icon: <FaIcons.FaRoute/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title:'16->Dikastiko-Panepistimio ',
        cName: 'dropdown-link'
        
      },
      {
        title: '17>Dikastiko-Panepistimio',
        cName: 'dropdown-link'
      }
   
    ]
  },
  {
    title: 'Create Chart',
    icon: <AiIcons.AiOutlineAreaChart />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Bar Chart',
        cName: 'sub-nav',
        icon: <AiIcons.AiOutlineBarChart />
      },
      {
        title: 'Line Chart',
        cName: 'sub-nav',
        icon: <AiIcons.AiOutlineLineChart />
      }
    ]
  }
];