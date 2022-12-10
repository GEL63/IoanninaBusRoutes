import React,{ Suspense, useEffect,useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './color.css';
import {choosenBus,getRoute,setWay,setID, busMovement} from '../Presenter/Map.js';
import {show} from '../Charts/Charts';

const origin=[20.852923,39.665555];
const destination = [20.8412895,39.6201176];
const newor = [20.8447964,39.6466972];
const newdest = [20.8486482,39.6441634];
let mycode='0';

//send route to Map.js
function sendRoute(){
  setWay(mycode,setID);
  choosenBus.setChoosenB= '1';
  /*if(mycode===1){
    getRoute(origin,destination,mycode);
  }else{
    getRoute(newor,newdest,mycode);
  }*/
}

const SideMenu = () => {

  const [code, setCode] = useState(0);

  useEffect(() => {
    mycode = code;
    sendRoute();
  }, [code]);

    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
        <CDBSidebar textColor="#fff" backgroundColor="#fbc40e">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              Ioannina Bus Routes
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
              </NavLink>
                <div style={{ 
                    display: 'flex', 
                     width: 70, 
                    padding: '20px'
                }}>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="nav-dropdown">Display Route</Dropdown.Toggle>
                        <Dropdown.Menu  id="box">
                            <Dropdown.Item onClick={()=>setCode(1)}>01:ΛΟΓΓΑΔΕΣ-ΧΑΡΟΚΟΠΙ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(2)}>02:ΕΛΕΟΥΣΑ-ΠΑΝΕΠΙΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(3)}>03:ΚΟΥΤΣΕΛΙΟ-ΜΟΥΖΑΚΕΟΙ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(4)}>04:ΠΕΡΙΒΛΕΠΤΟΣ-ΚΡΥΑ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(5)}>05:ΜΠΑΦΡΑ-ΝΕΑ ΖΩΗ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(6)}>06:ΠΕΔΙΝΗ-ΠΑΝΕΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(7)}>07:ΑΝΑΤΟΛΗ</Dropdown.Item> 
                            <Dropdown.Item onClick={()=>setCode(8)}>08:ΑΝΑΤΟΛΗ-ΚΑΤΣΙΚΑ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(9)}>09:ΕΡΓΑΤΙΚΕΣ ΚΑΤΟΙΚΙΕΣ-ΝΕΟΧΩΡΟΠΟΥΛΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(10)}>10:ΝΟΣΟΚΟΜΕΙΟ ΧΑΤΖΗΚΩΣΤΑ ΚΑΡΔΑΜΙΤΣΙΑ ΑΝΑΤΟΛΗ ΤΕΙ ΠΑΝΕΠΙΣΤΗΙΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(12)}>12:ΜΑΡΜΑΡΑ-ΣΤΑΥΡΑΚΗ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(13)}>13:ΛΑΨΙΣΤΑ-ΠΑΝΕΠΙΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(15)}>15:ΕΛΛΗΝΙΚΟ-ΧΑΝΙ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(16)}>16:ΠΑΝΕΠΙΣΤΗΜΙΟ-ΑΜΦΙΘΕΑ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(17)}>17:ΝΕΑ ΖΩΗ-ΠΑΝΕΠΙΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(21)}>21:ΔΡΟΣΙΑ</Dropdown.Item>
                            
                            
                            </Dropdown.Menu>
                </Dropdown>
                </div>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
              </NavLink>
                    <div style={{ 
                        display: 'in-line', 
                        width: 70, 
                        padding: 20,
                    }}>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="nav-dropdown">
                                Char Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu id="box">
                            <Dropdown.Item href="#/action-2">Bar Chart</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Line Chart</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
              </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    );
  };
  
  export default SideMenu;
  /*<CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>*/

/*                      NavLink
<CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/" activeClassName="activeClicked">
              </NavLink>
              <div style={{ 
                  display: 'in-line', 
                  width: 70, 
                  padding: 20,
                  }}>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title=" Display Route"
              menuVariant='dark'>

              <NavDropdown.Item onClick={func}>16: PERAMA-PANEPISTIMIO</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </div>
              </CDBSidebarMenu>
          </CDBSidebarContent>
          */
                