import { Outlet } from "react-router-dom"
import TopBar from "../../Component/TopBar/TopBar"
import SideBar from "../../Component/SideBar/SideBar"
import { useContext } from "react"
import { Menu } from "../../Hooks/Context/Menu"
import { Window } from "../../Hooks/Context/WindowSize"
import "./Dashboard.css"

const  Dashboard = ()=> {
  
    const menu=useContext(Menu)
    const isOpen=menu.isOpen

    const window=useContext(Window)
    const windowSize=window.windowSize
    console.log(windowSize)

    return(
      
        <div className="dashboard">

           <TopBar/>
          
           <div className="grand-sidebar">

                <SideBar className="sidebar-fin"/>

                <div
                    className="outlet"
                    style={{
                        marginLeft:
                        !isOpen && windowSize < 600 ? "20px" 
                        : !isOpen ? "110px"
                        : isOpen && "220px" }}>
                    <Outlet/> 
                </div>   
           </div>
           
        </div>  
    )}
export default Dashboard