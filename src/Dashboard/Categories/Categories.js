import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableShow from "../../Component/TableShow/TableShow";
import axios from "axios";
import { Axios } from "../../Axios/Axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // Fake scenario :
  // This fake API to display all gategories
  // I will use a fake API to fill the table
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((data) => setCategories(data.data.slice(0, 50)));
  }, []);

  // Real scenario :
  //This table should be filled by adding gategories
  /*
      useEffect(()=>{
         Axios.get(`/${"API Form Back-End Return All Gategories"}`)
         .then(data=>setGategories(data. ...))
      },[])
*/

  // Delelte function
  // this id It was passed from TableShow Component By Mapping
  const handleDelete = async (id) => {
    try {
      await Axios.delete(`{"API From Back-End To Delete User"}/${id}`);
      setCategories((prev) => prev.filter((el) => el.id !== id)); // To rerender table of gategories
    } catch (err) {
      console.log(err);
    }
  };

  // Real Scenario :
  // name values from me
  // Key values from API
  // key="url" I wrote this just to be able to show fake images

  const header = [
    { name: "Image", key: "url" },
    { name: "Title", key: "title" },
  ];

  // Return Data
  return (
    <div className="grand-table">
      <div className="child-one-table">
        <h2 className="table-header">Categories Page</h2>
        <Link to="/Dashboard/AddCategory" className="btn-table">
          Add Category
        </Link>
      </div>

      <TableShow
        /* These values will be passed to "TableShow Component" */
        header={header}
        data={categories}
        delete={handleDelete}
      />
    </div>
  );
};
export default Categories;
