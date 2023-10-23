import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TableShow from "../../Component/TableShow/TableShow";
import { Axios } from '../../Axios/Axios';



const  Users = ()  => {

   const[users,setUsers]=useState([])
   const[currentUser,setCurrentUser]=useState([])

// Fake scenario :
// This fake API to display all users with the current user
// I will use a fake API to fill the table
   useEffect(()=>{
      Axios.get()
      .then(data=>setUsers(data.data.slice(0,4)))
   },[])

// Real scenario :
// Here the table is supposed to be filled with login processes
// and user addition 

/*
useEffect(()=>{
     Axios.get(`/${"API Form Back-End Return All Users"}`)
     .then(data=>setUsers(data. ...))
},[])
*/


// Fake scenario :
// I defined this id only to display Fake current user data
// I need this to pass it to TabeShow Component

   const id=1

   useEffect(()=> {
         Axios.get(`/${id}`)
         .then(data=>setCurrentUser(data.data))
   },[])
   

// Real Scenario :
// This API supposed to contain current user data like (id,name,role,token ...)
// I assume the token type Bearer

/*
useEffect(()=>  {
    Axios.get(`/${API from Backend return current user data}`)
   .then(data=>setUser(data. ...)) 
   },[])
*/


// Delelte function
// this id It was passed from TableShow Component By Mapping
   const handleDelete = async(id) => {
      try{
         await Axios.delete(`{"API From Back-End To Delete User"}/${id}`)
         setUsers(prev=>prev.filter(el=> el.id !== id)) // To rerender table of users

       }catch(err){console.log(err)}
      
   }

// Real Scenario :
// name values from me
// Key values from API
// key="username" I wrote this just to be able to show the type of user
   const header = [
         { name:"UserName", key:'name' /* From API */},
         { name:"Email", key:"email" /* From API */},
         { name:"Role", key:"username" /* From API */}
    ]

 // Return Data
  return (

   <div className='grand-table'>

         <div  className='child-one-table'>
            <h2 className='table-header'>Users Page</h2>
            <Link to="/Dashboard/AddUser" className="btn-table">Add User</Link>
         </div>

  
         <TableShow
         /* These values will be passed to "TableShow Component" */
         header={header}
         data={users}
         currentUser={currentUser}
         delete={handleDelete}/>
    

   </div>

  )
}
export default Users

