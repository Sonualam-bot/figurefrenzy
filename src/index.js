
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { ProductProvider } from "./context/ProductContext";
import { AuthContextProvider } from "./context/AuthContext";
import { CategoryProvider } from "./pages/homepage/CategoryContext";
import { IndividualProvider } from "./pages/individualPage/IndividualContext";
import { CartContextProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AddressProvider } from "./context/AddressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AddressProvider>
        <AuthContextProvider>
          <ProductProvider>
            <CartContextProvider>
              <WishlistProvider>
                <CategoryProvider>
                  <IndividualProvider>
                    <App />
                  </IndividualProvider>
                </CategoryProvider>
              </WishlistProvider>
            </CartContextProvider>
          </ProductProvider>
        </AuthContextProvider>
      </AddressProvider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
