import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faDeleteLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  removeFromCart,
  resetCart,
} from "../../Hooks/ReduxToolkit/cartReducer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(false);
  // redux tookit
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  //render data
  return (
    <>
      <span className="counter">{products.length}</span>
      <FontAwesomeIcon
        icon={faCartShopping}
        className="cart-icon-top"
        size="2x"
        onClick={() => products.length > 0 && setCart((prev) => !prev)}
      />

      {cart ||
        (products.length > 0 && (
          <div className="cart">
            {products.map((item, index) => (
              <ul key={index}>
                <li>{index + 1}</li>
                <li className="cart-btn-name">{item.name}</li>
                <li className="cart-btn-price">{item.price} $</li>
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  size="2x"
                  color="red"
                  cursor={"pointer"}
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        id: item.id,
                      })
                    )
                  }
                />
              </ul>
            ))}

            <FontAwesomeIcon
              icon={faRotateRight}
              className="cart-icon-rot"
              size="2x"
              onClick={() => dispatch(resetCart())}
            />

            <Link className="cart-icon-buy">Buy Now</Link>
          </div>
        ))}
    </>
  );
};

export default Cart;
