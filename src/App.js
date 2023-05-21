import { Routes, Route } from "react-router-dom";
// import MockMan from 'mockman-js'

//All css imports
import "./App.css";
import "./pages/homepage/Homepage.css"
import "./pages/productpage/Productpage.css"
import "./pages/individualPage/IndividualPage.css"
import "./pages/login/Login.css"

import 'react-slideshow-image/dist/styles.css'


//All Pages imports
import { HomePage } from "./pages/homepage/HomePage";
import { ProductPage } from './pages/productpage/ProductPage';
import { Cart } from "./pages/Cart"
import { Wishlist } from "./pages/Wishlist"
import { Header } from "./header/Header";
import { Individual } from "./pages/individualPage/Individual";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/login/Signup";

import MockAPI from "./backend/mockman/MockAPI";

function App() {
  return (
    <div className="App">
      {/* <MockMan /> */}
      <header className="App-header">
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock-api" element={<MockAPI colorScheme="dark" />} />
      </Routes>
    </div>
  );
}

export default App;
