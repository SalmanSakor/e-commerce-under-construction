import { Link } from "react-router-dom"
import Card from "./Card"
import {DataCard} from "./Data"
import Footer from "./Footer"
import Cookie from "cookie-universal"
import "./LandingPage.css"


export default function LandingPage() {

  const cookie=Cookie()
  const token=cookie.get("token")

  const result=DataCard.map((item,index)=>
    <Card
      key={index}
      name={item.name}
      img={item.img}
    />)


  return (
      <>
              <div className="btn-landingPage">
                  <Link to={token ? "/Home" : "/Pass"} className="link-item">Click Me</Link>
              </div>


              <div className="father-card">
                    {result} 
              </div>
              
              <Footer/>

      </>
   
  )
}

