import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "animate.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import Usercontextprovider from "./Context/UserToken";
import CartOperationsprovider from "./Context/CartOperations";
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { QueryClient, QueryClientProvider } from "react-query";
import FavoriteOperationsprovider from "./Context/FavoriteOperations";
import ProductOperationsprovider from "./Context/ProductOperations";
import "./index.css";

let queryclient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductOperationsprovider>
    <FavoriteOperationsprovider>
      <CartOperationsprovider>
        <Usercontextprovider>
          <QueryClientProvider client={queryclient}>
            <App />
          </QueryClientProvider>
        </Usercontextprovider>
      </CartOperationsprovider>
    </FavoriteOperationsprovider>
  </ProductOperationsprovider>
);