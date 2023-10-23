import {useState,useEffect,useRef} from "react"
import { useNavigate } from "react-router-dom";
import {Button,Form} from 'react-bootstrap/';                                      
import LoadingPage from "../../Component/Loading/Loading"


const AddUser = () => {

    const[form,setForm]=useState ({
      name : "" ,
      email : "" ,
      role : "" ,
    })

    const Focus=useRef(null)
    const[Loading,setLoading]=useState(false) 
    const Nav=useNavigate()

// outo Focus
    useEffect(()=> {
     Focus.current.focus()
    },[])

// handle change
    const handleChange = (e) => {
      setForm({...form,[e.target.name]:e.target.value})
    }

// handle Onsubmit
    const handleSubmit = async (event) => {
      event.preventDefault()
      setLoading(true)
      try {
      // Real Scenario : 
      // const res = await Axios.post(`/${API From Back-End To Add User}`,form)                                       
      setLoading(false)
      Nav("/Dashboard/Users" )
  
      } catch (err) {
        setLoading(false)
      }
    }
   
// render data
  return (

  <>
      {Loading && <LoadingPage/>}
      <Form onSubmit={handleSubmit} className="form-add">  
          <h4 className="header-add">Add User</h4>
          <Form.Group className="mb-3" controlId="1">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            name="name"
            ref={Focus}
            placeholder="Name"
            value={form.name}
            onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3"controlId="2">
            <Form.Label>Email</Form.Label>
            <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3"controlId="3">
            <Form.Label>Role</Form.Label>
            <Form.Select
            value={form.role}
            name="role"
            onChange={handleChange}>
{/* Fake Scenario*/}
            <option disabled value="">Select Role</option>
            <option value="Leanne Graham">Admin</option>
            <option value="Ervin Howell">Writer</option>
            <option  value="Clementine Bauch">Seller</option>
            </Form.Select>
          </Form.Group>
{/* Real Scenario
I will assume that role="2000" for "Admin"
and role="2001" for "Writer"
and role ="2002" for Seller
and this role from API From Back-End

            <option disabled value="">Select Role</option>
            <option value="2000">Admin</option>
            <option value="2001">Writer</option>
            <option  value="2002">Seller</option>
*/}

          <Button
            variant="primary"
            type="submit"
            className="btn-add"
            disabled = {
              form.name.length > 1 &&
              form.email.length > 1 &&
              form.role !== "" ? false : true}>
            Save
          </Button>

     </Form>
  </>
  )
}
export default AddUser