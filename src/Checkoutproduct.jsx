import React from "react";
import { useStateValue } from "./Stateprovider";

const Checkoutproduct = ({ id, title, image, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div className="d-flex">
        <img src={`${image}`} alt="shirt" className="w-25" />
      </div>
      <div>
        <h3>{title}</h3>
        <span>{price}</span>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </p>
        <button
          onClick={removeFromCart}
          className="btn btn-sm
        btn-warning"
        >
          Remove from checkout
        </button>
      </div>
    </>
  );
};

export default Checkoutproduct;
