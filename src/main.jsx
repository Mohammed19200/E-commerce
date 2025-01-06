import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductOperationsprovider from "./Context/ProductOperations";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "animate.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "sweetalert2/src/sweetalert2.scss";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "./index.css";
import App from "./App";

let queryclient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <ProductOperationsprovider>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </ProductOperationsprovider>
);
