import {useState,useRef,useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Cookie from "cookie-universal"
import LoadingPage from "../../Component/Loading/Loading"
import {baseURL} from "../../API/API"

// I'll store the Token in Cookies
// I will assume that role="2000" for "Admin"
// and role="2001" for "Writer"
// and role ="2002" for Seller
// and Any other user will take role="2003"

const Login = () => {

  const cookie=Cookie()
  const Focus=useRef(null)
  const[Loading,setLoading]=useState(false)
  const[err,setErr]=useState("")


  const[form,setForm]=useState ({
    email : "" ,
    password : "" ,
  })

// handle Onchange
  const handleChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }

// outo Focus
  useEffect(()=> {
    Focus.current.focus()
  },[])

// handle Onsubmit
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
     try {
      // const res=await axios.post(`${baseURL}/${API From Back-End}`,form)   // Real Scenario
      // const token=res. ....                                                // Real Scenario
      const res = await axios.get(`${baseURL}`)                               // Fake Scenario 
      const token = res.data[0].name                                          // Fake Scenario 
      cookie.set("token",token)
      setLoading(false)
      window.location.pathname="/Dashboard"

      // Real Scenario
      // I will direct the user according to his permissions
      // in this state other users (with role = "2003") they will enter to Home Page
      
      /*
      const role=res. ...
      const go = rloe === "2000" ? "/Dashbored/Users"
      : role === "2001" ? "/Dashbored/Gategories"
      : role === "2002" ? "/Dashbored/Products"
      : "/Home"
      window.location.pathname=`/Dashboard/${go}`
      */

     }catch (err) {
      setLoading(false)
      if( err.response.status === 401 )  {
        setErr("email or password is wrong")
      }else {
        setErr("Internal server Error")
      }
}}

// render data 
  return (
 
    <>

      {Loading && <LoadingPage/>}

      { err !=="" && <p className="btn-wrong">{err}</p>}

      <div className="grand-auth grand-auth-login">

       <form className="father-auth father-auth-login" onSubmit={handleSubmit}>

            <h3 className="text-indent">Login Now</h3>
      
            <div className="child-auth">
              <input
              id={2}
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
              name="email"
              ref={Focus}
              required/>
              <label htmlFor={2}>Email</label>
            </div>
            
            <div className="child-auth" >
              <input
              id={3}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              name="password"
              minLength={6}
              required/>
              <label htmlFor={3}>Password</label>
            </div>
        
            <button
              type="submit"
              className="btn-login"
              disabled={form.email.length > 1 && form.password.length > 6 ? false : true}>Login
            </button>
          
          </form>

        <Link className="btn-home" to="/Home">Go To Home Page</Link>
          
      </div>

      

    </>
)}

export default Login