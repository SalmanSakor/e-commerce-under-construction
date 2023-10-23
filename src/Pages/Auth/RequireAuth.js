import { useState, useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Cookie from "cookie-universal";
import axios from "axios";
import { baseURL } from "../../API/API";
import LoadingPage from "../../Component/Loading/Loading";
// import Page403 from "../403Page/403"

const RequireAuth = ({ allowedRole }) => {
  const cookie = Cookie();
  const token = cookie.get("token");
  const Nav = useNavigate();
  const [user, setUser] = useState([]);

  // Real Scenario :
  // this API supposed to contain current user data like (id,name,role,token ...)

  /*
useEffect(()=>  
    axios.get(`${baseURL}/${API from Backend return current user data}`,{
    headers:{Authorization:`Bearer ${token}`} // I assume the token type Bearer
  })
  .then(data=>setUser(data. ...)) 
  .catch(()=>Nav("/Login",{replace:true}))
  },[])
*/

  // Real Scenario :
  // We can use axios.create to shorten the code =>
  // import { Axios } from "../../Axios/Axios" // Certainly import outside the component

  /*
useEffect(()=>  {
  Axios.get(`/${API from Backend return current user}`)
 .then(data=>setUser(data. ...)) 
 .catch(()=>Nav("/Login",{replace:true}))
},[])
*/

  // and clear this =>
  // import { baseURL } from "../../API/API"
  // import Cookie from "cookie-universal"

  // Fack scenario
  useEffect(() => {
    axios
      .get(`${baseURL}`)
      .then((data) => setUser(data.data))
      .catch(() => Nav("/Login", { replace: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render data
  return (
    // Real scenario

    /*
  token ? (user === ""
          ? (<LoadingPage/>)
          : (allowedRole.includes(user.role)
            ? <Outlet/>
            : <Page403 role={user.role}/>)) 
        : (<Navigate to={"/Login"} replace={true}/>)
*/

    // Fake scenario

    token ? (
      user === "" ? (
        <LoadingPage />
      ) : (
        <Outlet />
      )
    ) : (
      <Navigate to={"/Login"} replace={true} />
    )
  );
};
export default RequireAuth;
