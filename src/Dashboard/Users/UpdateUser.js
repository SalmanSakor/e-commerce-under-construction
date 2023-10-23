import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../Component/Loading/Loading";
import axios from "axios";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [disable, setDisable] = useState(true);
  const [Loading, setLoading] = useState(false);
  const Nav = useNavigate();

  // to show the user information that I want to modify
  // API from Back-End for all users and me use this id To select the desired user
  // Must send headers

  // fake Scenario
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setRole(data.data.name); // fake
        setLoading(false);
      })
      .then(() => setDisable(false))
      // this is Path not found
      .catch(() => Nav("/Dashboard/users/page/404", { replace: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Real Scenario :
      // const res = await Axios.post(`/${API From Back-End To Edit User/${id}}`,form)
      // we must use the same id to complete the modification process
      setLoading(false);
      Nav("/Dashboard/Users");
    } catch (err) {
      setLoading(false);
    }
  };

  // render data
  return (
    <>
      {Loading && <LoadingPage />}

      <Form onSubmit={handleSubmit} className="form-add">
        <h4 className="header-add">Edit User</h4>
        <Form.Group className="mb-3" controlId="1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="3">
          <Form.Label>Role</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            {/* Fake Scenario*/}
            <option disabled value="">
              Select Role
            </option>
            <option value="Leanne Graham">Admin</option>
            <option value="Ervin Howell">Writer</option>
            <option value="Clementine Bauch">Seller</option>
            <option value="Patricia Lebsack">User</option>
          </Form.Select>
        </Form.Group>
        {/* Real Scenario
I will assume that role="2000" for "Admin"
and role="2001" for "Writer"
and role ="2002" for Seller
and this role from API from Back-End

            <option disabled value="">Select Role</option>
            <option value="2000">Admin</option>
            <option value="2001">Writer</option>
            <option  value="2002">Seller</option>
*/}

        <Button
          variant="primary"
          type="submit"
          className="btn-add"
          disabled={disable}
        >
          Edit
        </Button>
      </Form>
    </>
  );
};
export default UpdateUser;
