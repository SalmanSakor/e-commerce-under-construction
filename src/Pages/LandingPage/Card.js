
export default function Card(props) {

  return (
    <div className="child-card">
              <img src={props.img} alt="logo" className="img-card"/>
              <div className="item-card">
                 <h5>{props.name}</h5>
              </div>
     </div> 

  )
}

