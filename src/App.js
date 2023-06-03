import { Routes, Route } from "react-router-dom";
// import MockMan from 'mockman-js'

//All css imports
import "./App.css";
import "./pages/homepage/Homepage.css"
import "./pages/productpage/Productpage.css"
import "./pages/individualPage/IndividualPage.css"
import "./pages/login/Form.css"
import "./pages/profile/Profile.css"
import "./pages/checkout/checkout.css"

import 'react-slideshow-image/dist/styles.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
import { RequiresAuth } from "./context/RequiresAuth";
import { Logout } from "./pages/login/Logout";
import { Profile } from "./pages/profile/Profile";
import { Details } from "./pages/profile/Details";
import { Address } from "./pages/profile/Address";
import { History } from "./pages/profile/History";
import { Checkout } from "./pages/checkout/Checkout";

function App() {
  return (
    <div className="App">
      {/* <MockMan /> */}
      {/* <header className="App-header">
        <Header page="product" />
      </header> */}


      <ToastContainer position="bottom-right" autoClose="500"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true" />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        } />
        <Route path="/wishlist" element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        } />
        <Route path="/individual" element={<Individual />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/details" element={< Details />} />
        <Route path="/profile/address" element={<Address />} />
        <Route path="/profile/history" element={<History />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mock-api" element={<MockAPI colorScheme="dark" />} />
      </Routes>
    </div>
  );
}

export default App;
