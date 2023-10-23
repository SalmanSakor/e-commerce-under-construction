import { Link } from "react-router-dom";
import { addToPage, addToCart } from "../../Hooks/ReduxToolkit/cartReducer";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const car = useSelector((state) => state.cart.cars);

  const handleClick = () => {
    car.map((item) =>
      dispatch(
        addToPage({
          name: item.name,
          price: item.price,
          img: item.img,
        })
      )
    );
  };

  return (
    <>
      {data.map((item) => (
        <div className="father-car-card" key={item.id}>
          <div className="child-car-card">
            <div onClick={handleClick} className="help-hover">
              <Link to={`${item.id}`}>
                <img src={item.img} alt="logo_car" className="img-car-card" />
              </Link>
            </div>

            <div className="item-hover">{item.price} $</div>

            <div className="footer-car-card">
              <div>{item.name}</div>
              <div>{item.year}</div>
            </div>

            <button
              className="btn-add-card"
              onClick={() =>
                dispatch(
                  addToCart({ id: item.id, name: item.name, price: item.price })
                )
              }
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
