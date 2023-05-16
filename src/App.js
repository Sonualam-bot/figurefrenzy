import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from './pages/ProductPage';
import { Cart } from "./pages/Cart"
import { Wishlist } from "./pages/Wishlist"
import { Header } from "./header/Header";

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
      </Routes>
    </div>
  );
}

export default App;
