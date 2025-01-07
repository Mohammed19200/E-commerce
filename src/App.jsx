import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Singleproduct from "./Pages/Singleproduct/Singleproduct";
import NotFound from "./Pages/NotFound/NotFound";
import MainLayout from "./MainLayout/MainLayout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Favorite from "./Pages/Favorite/Favorite";
import Categories from "./Pages/Categories/Categories";
import Contact from "./Pages/Contact/Contact";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Faq from "./Pages/Faq/Faq";
import TermsConditions from "./Pages/Terms-Conditions/Terms-Conditions";
import Checkout from "./Components/Checkout/Checkout";
import Orders from "./Pages/UserOrders/UserOrders";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Offline } from "react-detect-offline";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "shop", element: <Shop /> },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "favorite",
          element: (
            <ProtectedRoute>
              <Favorite />
            </ProtectedRoute>
          ),
        },
        {
          path: "singleproduct/:id",
          element: (
            <ProtectedRoute>
              <Singleproduct />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "contact", element: <Contact /> },
        { path: "aboutus", element: <Aboutus /> },
        { path: "categories", element: <Categories /> },
        { path: "faq", element: <Faq /> },
        { path: "terms", element: <TermsConditions /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
      <Offline>
        <div className="Offline-Div col-12">
          Your internet is disconnected or weak
        </div>
      </Offline>
      <RouterProvider router={routers}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
