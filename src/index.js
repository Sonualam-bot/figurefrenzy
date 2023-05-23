
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

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductProvider>
          <CartContextProvider>
            <CategoryProvider>
              <IndividualProvider>
                <App />
              </IndividualProvider>
            </CategoryProvider>
          </CartContextProvider>
        </ProductProvider>
      </AuthContextProvider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
