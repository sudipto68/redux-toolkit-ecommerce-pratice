import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Naav from "./Components/Nav/Naav";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Naav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
