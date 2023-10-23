import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Menu } from "../../Hooks/Context/Menu";
import { Window } from "../../Hooks/Context/WindowSize";
import { useContext /* ,useEffect,useState */ } from "react";
import { Data } from "./SideBarData";
// import Cookie from "cookie-universal"
// import axios from "axios"
// import { baseURL } from "../../API/API"

const SideBar = () => {
  //    const cookie=Cookie()
  //    const token=cookie.get("token")
  //    const[currentUser,setCurrentUser]=useState([])

  // useContext
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;

  const window = useContext(Window);
  const windowSize = window.windowSize;

  // Real Scenario :
  // this API supposed to contain current user data like (id,name,role,token ...)

  /*
useEffect(()=>  
    axios.get(`${baseURL}/${API from Backend return current user data}`,{
    headers:{Authorization:`Bearer ${token}`} // I assume the token type Bearer
  })
  .then(data=>setCurrentUser(data. ...)) 
  },[])
*/

  // render data
  return (
    <>
      <div
        className="father-sidebar"
        style={{
          width: isOpen ? "200px" : "100px",
          left: windowSize < 600 ? (!isOpen ? "-100%" : "0") : "0",
        }}
      >
        {Data.map((link, index) => (
          // Hide Navlinks from a list "SideBar" This depends on the Role
          // Real Scenario  link.role.includes(user.role) &&
          <NavLink
            to={link.to}
            key={index}
            className="child-sidebar"
            style={{ paddingLeft: !isOpen && "8px" }}
          >
            <FontAwesomeIcon icon={link.icon} />
            <span style={{ display: isOpen ? "block" : "none" }}>
              {link.name}
            </span>
            <hr />
          </NavLink>
        ))}
      </div>
    </>
  );
};
export default SideBar;
