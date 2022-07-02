import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Naav from "./Components/Nav/Naav";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <Naav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" />
      <ToastContainer />
    </div>
  );
}

export default App;
