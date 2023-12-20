import React from "react";
import Products from "./products";
const Home = () => {
  return (
    <>
      <div className="poducts">
        <div className="products bg-light">
          <div className="p-3 d-flex">
            <div className="w-50 p-2 bg-white m-2">
              <Products
                id={1}
                title={"Plaid Wool Shirt Jacket"}
                image={"sraw1.png"}
                rating={4}
                price={120000}
              />
            </div>

            <div className="w-50 p-2 bg-white m-2">
              <Products
                id={2}
                title={"Indigo Woven Workshirt"}
                image={"sraw2.png"}
                rating={5}
                price={150000}
              />
            </div>
          </div>

          <div className="p-3 d-flex">
            <div className="p-2 bg-white m-2">
              <Products
                id={3}
                title={"Corduroy Workshirt"}
                image={"sraw3.png"}
                rating={3}
                price={125000}
              />
            </div>
            <div className="p-2 bg-white m-2">
              <Products
                id={4}
                title={"Indigo Woven Workshirt"}
                image={"shirts2.png"}
                rating={4}
                price={140000}
              />
            </div>
            <div className="p-2 bg-white m-2">
              <Products
                id={5}
                title={"Indigo Woven Workshirt"}
                image={"sraw4.png"}
                rating={4}
                price={130000}
              />
            </div>
          </div>

          <div className="p-3 d-flex">
            <div className="p-2 bg-white m-2">
              <Products
                id={3}
                title={"Custom Slim Fit Mesh Polo Shirt"}
                image={"polo1.png"}
                rating={3}
                price={35000}
              />
            </div>

            <div className="p-2 bg-white m-2">
              <Products
                id={4}
                title={"Custom Slim Fit Mesh Polo Shirt"}
                image={"polo2.png"}
                rating={4}
                price={35000}
              />
            </div>

            <div className="p-2 bg-white m-2">
              <Products
                id={5}
                title={"Custom Slim Fit Mesh Polo Shirt"}
                image={"polo1.png"}
                rating={4}
                price={35000}
              />
            </div>
          </div>

          <div className="p-3 d-flex">
            <div className="p-2 bg-white m-2">
              <Products
                id={3}
                title={"Heritage Court I Leather Trainer"}
                image={"shoes_1.png"}
                rating={3}
                price={70000}
              />
            </div>

            <div className="p-2 bg-white m-2">
              <Products
                id={4}
                title={"Heritage Court II Leather Trainer"}
                image={"shoes_2.png"}
                rating={4}
                price={75000}
              />
            </div>

            <div className="p-2 bg-white m-2">
              <Products
                id={5}
                title={"Heritage Court III Leather Trainer"}
                image={"shoes_3.png"}
                rating={4}
                price={70000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
