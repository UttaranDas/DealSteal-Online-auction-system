import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Loginpage from "./components/Loginpage";
import MyAccount from "./components/MyAccount";
import MyProductBid from "./components/MyProductBid";
import SignUp from "./components/SignUp";
import ProductPage from "./components/ProductPage";
import UploadProductPage from "./components/UploadProductPage";
import Aboutpage from "./components/Aboutpage";
import MyBids from "./components/MyBids";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-product-bid" element={<MyProductBid />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/upload-product" element={<UploadProductPage />} />
          <Route path="/sell" element={<UploadProductPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/mybids" element={<MyBids />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
