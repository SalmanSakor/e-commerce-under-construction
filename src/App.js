import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Pass from "./Pages/PassPage/Pass";
import Home from "./Pages/HomePage/Home";
import CarsPage from "./Pages/CarsPage/CarsPage";
import Err404 from "./Component/404/404";
import LandingPage from "./Pages/LandingPage/LandingPage";
import OneCar from "./Pages/CarsPage/oneCar";

// Require
import RequireAuth from "./Pages/Auth/RequireAuth";
import RequireBack from "./Pages/Auth/RequireBack";

// Dashboard
import Dashboard from "./Dashboard/DashboardPage/Dashboard";
// Users
import Users from "./Dashboard/Users/Users";
import UpdateUser from "./Dashboard/Users/UpdateUser";
import AddUser from "./Dashboard/Users/AddUser";
// Gategories
import Categories from "./Dashboard/Categories/Categories";
import UpdateCategory from "./Dashboard/Categories/UpdateCategory";
import AddCategory from "./Dashboard/Categories/AddCategory";
//Products
import Products from "./Dashboard/Products/Products";
import UpdateProduct from "./Dashboard/Products/UpdateProduct";
import AddProduct from "./Dashboard/Products/AddProduct.js";
//Reviews
import Reviews from "./Dashboard/Reviews/Reviews";

// I will assume that role="2000" for "Admin"
// and role="2001" for "Writer"
// and role ="2002" for Seller
// and Any other user will take role="2003"
const App = () => {
  return (
    <>
      <Routes>
        {/*Puplic Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Cars" element={<CarsPage />} />
        <Route path="/Cars/:id" element={<OneCar />} />
        <Route path="/*" element={<Err404 />} />

        <Route element={<RequireBack />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Pass" element={<Pass />} />
        </Route>
        {/*Protected Routes */}
        <Route element={<RequireAuth />} allowedRole={["2000", "2001", "2002"]}>
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth />} allowedRole={["2000"]}>
              <Route path="Users" element={<Users />} />
              <Route path="Users/:id" element={<UpdateUser />} />
              <Route path="AddUser" element={<AddUser />} />
            </Route>

            <Route element={<RequireAuth />} allowedRole={["2000", "2001"]}>
              <Route path="Reviews" element={<Reviews />} />
            </Route>

            <Route element={<RequireAuth />} allowedRole={["2000", "2001"]}>
              <Route path="Categories" element={<Categories />} />
              <Route path="Categories/:id" element={<UpdateCategory />} />
              <Route path="AddCategory" element={<AddCategory />} />
            </Route>

            <Route
              element={<RequireAuth />}
              allowedRole={["2000", "2001", "2003"]}
            >
              <Route path="Products" element={<Products />} />
              <Route path="Products/:id" element={<UpdateProduct />} />
              <Route path="AddProduct" element={<AddProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
