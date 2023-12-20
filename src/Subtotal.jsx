import React from "react";
import { useStateValue } from "./Stateprovider";
import { total } from "./Reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="bg-light p-4">
      <p>
        Subtotal({basket.length} items): N{total(basket)}
      </p>

      <button className="btn btn-warning rounded-0">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
