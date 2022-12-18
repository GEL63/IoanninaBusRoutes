import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './color.css';
import {choosenBus,getRoute,setWay,setID} from '../Presenter/Map.js';
import {show} from '../Charts/Charts';


let mycode='0';

//send route to Map.js
async function sendRoute(){
  setWay(mycode);
  choosenBus.setChoosenB= '1';
 /* if(mycode===1){
    getRoute(mycode);
  }else{
    getRoute(mycode);
  }
  */
}



const SideMenu = () => {

  const [code, setCode] = useState(0);



  useEffect(() => {
    mycode = code;
    sendRoute();
  }, [code]);
  


    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
        <CDBSidebar textColor="#f34c19" backgroundColor="#fbc40e" align='left' >
          <CDBSidebarHeader  prefix={<i className="fa fa-bars fa-large"style={{marginRight: '-100px'}}></i>}>
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

                <Dropdown textColor="black">
                    <Dropdown.Toggle variant="success" id="nav-dropdown">Display Route</Dropdown.Toggle>
                        <Dropdown.Menu  id="box">
                            <Dropdown.Item onClick={()=>setCode(1732)}>01:ΛΟΓΓΑΔΕΣ-ΧΑΡΟΚΟΠΙ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1723)}>02:ΕΛΕΟΥΣΑ-ΠΑΝΕΠΙΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1730)}>03:ΚΟΥΤΣΕΛΙΟ-ΜΟΥΖΑΚΕΟΙ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1726)}>04:ΠΕΡΙΒΛΕΠΤΟΣ-ΚΡΥΑ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1729)}>05:ΜΠΑΦΡΑ-ΝΕΑ ΖΩΗ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1728)}>06:ΠΕΔΙΝΗ-ΠΑΝΕΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1722)}>07:ΑΝΑΤΟΛΗ</Dropdown.Item> 
                            <Dropdown.Item onClick={()=>setCode(1737)}>08:ΑΝΑΤΟΛΗ-ΚΑΤΣΙΚΑ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1734)}>09:ΕΡΓΑΤΙΚΕΣ ΚΑΤΟΙΚΙΕΣ-ΝΕΟΧΩΡΟΠΟΥΛΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1727)}>10:ΝΟΣΟΚΟΜΕΙΟ ΧΑΤΖΗΚΩΣΤΑ ΚΑΡΔΑΜΙΤΣΙΑ ΑΝΑΤΟΛΗ ΤΕΙ ΠΑΝΕΠΙΣΤΗΙΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1733)}>12:ΜΑΡΜΑΡΑ-ΣΤΑΥΡΑΚΗ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1735)}>13:ΛΑΨΙΣΤΑ-ΠΑΝΕΠΙΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1731)}>15:ΕΛΛΗΝΙΚΟ-ΧΑΝΙ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1725)}>16:ΠΑΝΕΠΙΣΤΗΜΙΟ-ΑΜΦΙΘΕΑ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1724)}>17:ΝΕΑ ΖΩΗ-ΠΑΝΕΠΙΣΤΗΜΙΟ</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setCode(1736)}>21:ΔΡΟΣΙΑ</Dropdown.Item>
                            
                            
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
                        marginTop:-300
                    }}>

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="nav-dropdown">
                                Char Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu id="box">
                            <Dropdown.Item onClick={show}>Bar Chart</Dropdown.Item>
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
                
