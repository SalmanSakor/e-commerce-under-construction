import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingPage from "../../Component/Loading/Loading";

const UpdateCategories = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [Loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const Nav = useNavigate();

  // to show the gategory information that I want to modify
  // API from Back-End for all gategories and me use this id To select the desired gategory
  // Must send headers
  // fake Scenario
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((data) => {
        setTitle(data.data.title);
        setLoading(false);
      })
      .then(() => setDisable(false))
      // this is Path not found
      .catch(() => Nav("/Dashboard/categories/page/404", { replace: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const form = new FormData();
      form.append("title" /* from Back-End */, title);
      form.append("image" /* form Back-End */, image);
      // Real Scenario :
      // const res = await Axios.post(`/${API From Back-End To Edit Gategory/${id}}`,form)
      // we must use the same id to complete the modification process
      setLoading(false);
      Nav("/Dashboard/Categories");
    } catch (err) {
      setLoading(false);
    }
  };

  // render Data
  return (
    <>
      {Loading && <LoadingPage />}

      <Form onSubmit={handleSubmit} className="form-add">
        <h4 className="header-add">Edit Gategory</h4>
        <Form.Group className="mb-3" controlId="1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
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
          disabled={disable}
        >
          Edit
        </Button>
      </Form>
    </>
  );
};
export default UpdateCategories;
