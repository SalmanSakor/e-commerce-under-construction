
import { createContext ,useState,useEffect} from "react";


export const Window = createContext(null)

const WindowContext = ({children}) => {
  
     const[windowSize,setWindowSize]=useState(window.innerWidth)

     useEffect(() => {
            function setWindowWidth () {
            setWindowSize(window.innerWidth)
            }
            window.addEventListener("resize",setWindowWidth)
            // CleanUp Function
            return()=>{window.removeEventListener("resize",setWindowWidth)}

        }, [])
     
// render data
    return(
        
            <Window.Provider value={{windowSize}}>
               {children}
            </Window.Provider>
    )
}
export default WindowContext