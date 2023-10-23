import { useState } from "react";
import { Data } from "./Data";
import Card from "./Card";
import Cart from "./Cart";
import "./Card.css";
import { Fragment } from "react";

export const CarsPage = () => {
  const keys = ["name", "year"];
  const [cars, setCars] = useState("");

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(cars))
    );
  };

  // render data
  return (
    <>
      <form className="header-car">
        <h2>Find your favorite car</h2>
        <div className="d-flex">
          <input type="text" onChange={(e) => setCars(e.target.value)} />

          <button type="submit">Search</button>
        </div>
      </form>

      <div className="grand-car-card">
        <Card data={search(Data)} />
      </div>
      <Cart />
    </>
  );
};
export default CarsPage;
