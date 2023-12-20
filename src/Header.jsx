import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useStateValue } from "./Stateprovider";
import Footer from "./Footer";
const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="navset">
      <nav className="navbar navbar-expand navbar-dark bg-dark bg-faded">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none d-flex">
            <i className="bi bi-shop-window fs-4 text-warning me-2"></i>
            <a className="navbar-brand" href="#">
              sTevo
            </a>
          </Link>
          <div class="input-group">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text bg-warning" id="basic-addon2">
              <i className="bi bi-search"></i>
            </span>
          </div>
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active d-flex flex-column"
                href="#"
                aria-current="page"
              >
                <small style={{ fontSize: "10px" }}>Hello</small>
                <strong style={{ fontSize: "11px" }}>Guest</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex flex-column" href="#">
                <small style={{ fontSize: "10px" }}>Your</small>
                <strong style={{ fontSize: "11px" }}>Shop</strong>
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link d-flex" to="/checkout">
                <i className="bi bi-cart text-white me-2 fs-5"></i>
                <span>
                  <strong>{basket.length}</strong>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
