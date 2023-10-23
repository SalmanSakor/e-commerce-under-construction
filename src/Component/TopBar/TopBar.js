import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Cookie from "cookie-universal";
import { Menu } from "../../Hooks/Context/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import { baseURL } from "../../API/API";
import photo from "../../assets/images/salman.jpg";

const TopBar = () => {
  // useContext
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen;

  const [name, setName] = useState("");
  // const[image,setImage]=useState("")
  const Nav = useNavigate();
  const cookie = Cookie();

  // Real scenario :
  // import { Axios } from "../../Axios/Axios";  // Certainly import outside the component
  // I will store the name and photo of the current user For display  on "TopBar"

  /*
useEffect(()=>{
  
   Axios.get(`/${"API from Backend return current user"}`)
   .then(data=>{
    setName(data. ...);
    setImage(data. ...)
   }) 
   .catch(()=>Nav("/Login",{replace:true}))
        
   },[])
*/

  // Fake scenario :
  // I defined this id only to display a fake name
  // As for the image, I will import it locally
  const id = 1;

  useEffect(() => {
    axios
      .get(`${baseURL}/${id}`)
      .then((data) => setName(data.data.name))
      .catch(() => Nav("/Login", { replace: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Logout function
  const handleLogout = () => {
    cookie.remove("token");
    Nav("/Register", { replace: true });
  };

  return (
    <div className="father-topbar">
      <div className="child-topbar child-one-topbar">
        <Link to="/Dashboard" className="item">
          Dashboard
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsOpen((prev) => !prev)}
          className="icon"
        />
      </div>

      <div className="child-topbar child-two-topbar">
        <Link to="/Home">
          {" "}
          <FontAwesomeIcon icon={faHouse} className="icon" />
        </Link>

        <div className="child-three-topbar">
          <img src={photo} alt="myPhoto" className="img-topbar" />

          <DropdownButton title={name.slice(0, 7).replace("Leanne", "Salman")}>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
