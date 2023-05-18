import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./pages/homepage/Homepage.css"
import "./pages/productpage/Productpage.css"
import "./pages/individualPage/IndividualPage.css"
import { HomePage } from "./pages/homepage/HomePage";
import { ProductPage } from './pages/productpage/ProductPage';
import { Cart } from "./pages/Cart"
import { Wishlist } from "./pages/Wishlist"
import { Header } from "./header/Header";
import { Individual } from "./pages/individualPage/Individual";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/individual/:figureId" element={<Individual />} />
      </Routes>
    </div>
  );
}

export default App;
