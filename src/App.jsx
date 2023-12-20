import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
// import "bootstrap-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
