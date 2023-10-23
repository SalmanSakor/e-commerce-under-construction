import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "cookie-universal";
import LoadingPage from "../../Component/Loading/Loading";
import { baseURL } from "../../API/API";
import "./Auth.css";

// I'll store the Token in Cookies
// I will assume that role="2000" for "Admin"
// and role="2001" for "Writer"
// and role ="2002" for Seller
// and Any other user will take role="2003"

const Register = () => {
  const cookie = Cookie();
  const Nav = useNavigate();
  const Focus = useRef(null);
  const [Loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordR: "",
  });

  // outo Focus
  useEffect(() => {
    Focus.current.focus();
  }, []);

  // handle Onchange
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form.name);
  // handle Onsubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // const res = await axios.post(`${baseURL}/${API From Back-End}`,form) // Real Scenario
      // const token=res. ....                                                // Real Scenario
      const res = await axios.get(`${baseURL}`); // Fake Scenario
      const token = res.data[0].name; // Fake Scenario
      cookie.set("token", token);
      setLoading(false);
      Nav("/Dashboard");
      // Real Scenario
      // I will direct the user according to his permissions
      // in this state other users (with role = "2003") they will enter to Home Page

      /*
      const role=res. ...
      const go = rloe === "2000" ? "/Dashbored/Users"
      : role === "2001" ? "/Dashbored/Gategories"
      : role === "2002" ? "/Dashbored/Products"
      : "/Home"
      window.location.pathname=`/Dashboard/${go}`
      */
    } catch (err) {
      setLoading(false);
      if (err.response.status === 422) {
        setErr("Email is already beem taken");
      } else {
        setErr("Internal server Error");
      }
    }
  };

  // render data
  return (
    <>
      {Loading && <LoadingPage />}

      {err !== "" && <p className="btn-wrong">{err}</p>}

      <div className="grand-auth">
        <form onSubmit={handleSubmit} className="father-auth">
          <h3 className="text-indent">Register Now</h3>

          <div className="child-auth">
            <input
              ref={Focus}
              id={1}
              type="text"
              placeholder="Name"
              onChange={handleChange}
              value={form.name}
              name="name"
              minLength={4}
              required
            />
            <label htmlFor={1}>Name</label>
          </div>

          <div className="child-auth">
            <input
              id={2}
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
              name="email"
              required
            />
            <label htmlFor={2}>Email</label>
          </div>

          <div className="child-auth">
            <input
              id={3}
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={form.password}
              name="password"
              minLength={6}
              required
            />
            <label htmlFor={3}>Password</label>
          </div>

          <div className="child-auth">
            <input
              id={4}
              type="password"
              placeholder="Repeat Password"
              onChange={handleChange}
              value={form.passwordR}
              name="passwordR"
              minLength={6}
              required
            />
            <label htmlFor={4}>Repeat Password</label>
          </div>

          <button
            type="submit"
            className="btn-register"
            disabled={
              form.name.length > 4 &&
              form.email.length > 1 &&
              form.password.length > 6 &&
              form.passwordR.length > 6
                ? false
                : true
            }
          >
            Register
          </button>
        </form>

        <Link className="btn-home" to="/Home">
          Go To Home Page
        </Link>
      </div>
    </>
  );
};

export default Register;
