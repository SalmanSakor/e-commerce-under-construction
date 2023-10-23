import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import "./TableShow.css"

// Fake scenario :
const TableShow = (props) =>  {

  const currentUserShow=props.currentUser || {name:""}

  // Header Show
  const headerShow=props.header.map((item,index) =>
  <th key={index} className='center-table'>{item.name}</th>)


  // Body Show
  const dataShow=props.data.map ((item,index) =>

  <tr key={index}>

         <td className='center-table'>{index + 1}</td>

         {props.header.map ((item2,index) => 
         <td key={index} className='center-table'>

          {item2.key === "url" ?
           <img
            src={item[item2.key]}
            alt="Logo"
            height={"28px"}
            width={"70px"}/> :
           // I wrote this just to be able to show the type of user                                   
           item[item2.key] === "Bret" ? "Admin" :
           item[item2.key] === "Antonette" ? "Writer" :
           item[item2.key] === "Samantha" ? "Seller" :
           item[item2.key] === "Karianne" ? "User" :
           item[item2.key]}
    
          {currentUserShow.name === item[item2.key] && " (admin)"}
          </td>)}
  
          <td className='icon-table-show'>
            {currentUserShow.name !== item.name &&
            <FontAwesomeIcon
            className="icon-delete"
            title='Please check code source'
            icon={faDeleteLeft}
            onClick={()=>props.delete(item.id)}/>}
          
            <Link to={`${item.id}`}>
              <FontAwesomeIcon
              className='icon-edit'
              icon={faPenToSquare}/>
            </Link>
          </td>

  </tr>)



 // render data
  return (

      <Table striped bordered hover>

          <thead>
              <tr>
                <th className='center-table'>ID</th>
                {headerShow}
                <th>Action</th>
              </tr>
          </thead>

          <tbody>
              {props.data.length === 0 &&
              <tr>
                <td colSpan={12} className='text-center'>Loading...</td>
              </tr>}
              {dataShow}
          </tbody>

      </Table>
  )
}

export default TableShow
