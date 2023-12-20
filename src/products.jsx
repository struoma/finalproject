import React from "react";
import Reducer from "./Reducer";
import { useStateValue } from "./Stateprovider";

const Products = ({ id, title, rating, price, image }) => {
  const [state, dispatch] = useStateValue();
  function addProduct() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <p className="titleheading">{title}</p>
        <strong>N{price}</strong>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <img src={image} className="w-50" alt={title} />

        <button
          onClick={addProduct}
          className="btn btn-warning w-50"
          style={{ width: 50 }}
        >
          Add Product
        </button>
      </div>
    </>
  );
};

export default Products;
