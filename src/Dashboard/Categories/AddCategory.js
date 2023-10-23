import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap/";
import LoadingPage from "../../Component/Loading/Loading";

const AddCategory = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const Focus = useRef(null);
  const [Loading, setLoading] = useState(false);
  const Nav = useNavigate();

  // outo Focus
  useEffect(() => {
    Focus.current.focus();
  }, []);

  // handle Onsubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const form = FormData();
      form.append("title" /* From Back-End */, title);
      form.append("image" /* From Back-end */, image);
      // Real Scenario :
      // headers Sent at every operation in Dashboard
      // const res = await Axios.post(`/${API From Back-End To Add Gategory}`,form)
      setLoading(false);
      Nav("/Dashboard/Categories");
    } catch (err) {
      setLoading(false);
    }
  };

  // render data
  return (
    <>
      {Loading && <LoadingPage />}
      <Form onSubmit={handleSubmit} className="form-add">
        <h4 className="header-add">Add Category</h4>
        <Form.Group className="mb-3" controlId="1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            ref={Focus}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="2">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.files.item(0))}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="btn-add"
          disabled={title.length > 1 ? false : true}
        >
          Save
        </Button>
      </Form>
    </>
  );
};
export default AddCategory;
