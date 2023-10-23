import { useSelector } from "react-redux";

const OneCar = () => {
  const car = useSelector((state) => state.cart.cars);

  // render data

  return (
    <>
      {car.map((item, index) => (
        <div key={index} className="one-car">
          <img src={item.img} alt="car" />
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
        </div>
      ))}
    </>
  );
};

export default OneCar;
