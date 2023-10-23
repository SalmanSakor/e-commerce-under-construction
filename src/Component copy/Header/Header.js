import { NavLink, useNavigate, Link } from "react-router-dom";

import Cookie from "cookie-universal";
import { FaFacebook, FaSquareWhatsapp } from "react-icons/fa6";
// useRedux
import { AddItem } from "../../Hooks/Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../Hooks/Redux/Types";
// css
import "./Header.css";

const Header = () => {
  // useRedux

  const state = useSelector((state) => state.Add.text);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (state === types.ADD) {
      dispatch(AddItem(types.REE));
    } else if (state === types.REE) {
      dispatch(AddItem(types.ADD));
    }
  };

  const cookie = Cookie();
  const token = cookie.get("token");
  const Nav = useNavigate();

  // Logout function
  const handleLogout = () => {
    cookie.remove("token");
    Nav("/Register", { replace: true });
  };

  // render data
  return (
    <div className="father-header">
      <div className="child-header">
        <button className="btn-info-one" onClick={handleClick}>
          {state}
        </button>

        {state === types.REE && (
          <div className="btn-info-two">
            <FaFacebook size="20px" color="blue" />
            <Link to="https://www.facebook.com/profile.php?id=100089311793076">
              <div className="item-line">Salman Sakor</div>
            </Link>
            <FaSquareWhatsapp size="20px" color="green" />
            <div className="item-line">0985533957</div>
          </div>
        )}

        {token && (
          <NavLink className="btn-header" to="/Dashboard">
            Dashboard
          </NavLink>
        )}
      </div>

      {!token ? (
        <div className="child-header">
          <NavLink className="btn-header" to="/Login">
            Login
          </NavLink>
          <NavLink className="btn-header" to="/Register">
            Register
          </NavLink>
        </div>
      ) : (
        <NavLink className="btn-header" onClick={handleLogout}>
          Logout
        </NavLink>
      )}
    </div>
  );
};

export default Header;
