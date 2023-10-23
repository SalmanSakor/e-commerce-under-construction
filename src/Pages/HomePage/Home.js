import Header from "../../Component/Header/Header";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Redux
import { Provider } from "react-redux";
import { store } from "../../Hooks/Redux/Store";

// css
import "./Home.css";

const Home = () => {
  return (
    <div className="grand-home">
      <Provider store={store}>
        <Header />
      </Provider>

      <div className="father-home">
        <h1 className="child-home">Choose Your Car</h1>
        <Link to="/Cars">
          <FontAwesomeIcon
            icon={faArrowRight}
            size="2x"
            color="red"
            cursor={"pointer"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
