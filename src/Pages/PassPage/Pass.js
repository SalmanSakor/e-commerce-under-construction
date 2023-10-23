
import {Link} from "react-router-dom"

import "./Pass.css"

export default  function pass() {


  return (


      <div className="father-pass">

        <h1 className="h1-pass">Welcome</h1>
        <h2 className="h2-pass">
          <Link to="/Register" className="link-pass">Register</Link> 
          <Link to="/Login"className="link-pass">Login</Link>
        </h2>
        
      </div>

   
  )
}

