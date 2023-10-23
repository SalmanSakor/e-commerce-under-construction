import { Outlet } from "react-router-dom"
import  Cookie  from "cookie-universal"

const Requireback = () => {
  
    const cookie=Cookie()
    const token=cookie.get("token")


  return (
    token ? window.history.back() : <Outlet/>
  )
}

export default Requireback
