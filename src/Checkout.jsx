import React from "react";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Stateprovider";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="container-fluid">
      <div className="row mt-2 min-vh-100">
        <div className="col-9">
          {basket.map((item) => (
            <Checkoutproduct
              key={item.id} // Add a unique key prop for each item
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
        <div className="col-3">
          <Subtotal />
        </div>
      </div>
      <Link className="back" to={"/"}>
        BACK TO HOME PAGE
      </Link>
    </div>
  );
};

export default Checkout;
