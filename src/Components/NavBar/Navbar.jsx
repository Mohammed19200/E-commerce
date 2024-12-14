import React, { useContext, useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "../../Context/UserToken";
import Logo from "../../assets/Shopping_Bag_Online_Market_Logo-transformed (1).png";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { FaShopify } from "react-icons/fa6";
import { MdFindInPage } from "react-icons/md";
import { IoMdArrowRoundDown } from "react-icons/io";
import { CartOperations } from "../../Context/CartOperations";
import { FavoriteOperations } from "../../Context/FavoriteOperations";
import { toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import login from "../../assets/login (1).png";
import register from "../../assets/register.png";

export default function Navtest() {
  const { getcartdata } = useContext(CartOperations);
  let { GetData } = useContext(FavoriteOperations);
  let CartOwner = localStorage.getItem("cartOwner");

  const [cartItem, setcartItem] = useState();
  const [favoriteItem, setfavoriteItem] = useState();

  const { usertoken, setusertoken } = useContext(Usercontext);
  let navigate = useNavigate();

  async function Items() {
    let { data } = await getcartdata();
    if (data) {
      setcartItem(data?.numOfCartItems);
    }
  }

  async function getdata() {
    let { data } = await GetData();
    if (data) {
      if (data?.count) {
        setfavoriteItem(data?.count);
      }
    }
  }

  useEffect(() => {
    Items();
    getdata();
  }, []);

  function logout() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("EmailOffer");
    localStorage.removeItem("cartId");
    localStorage.removeItem("cartOwner");
    setusertoken("");
    navigate("/");
    toast.success("You Logged out Successfully");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarposition">
        <div className="container-fluid">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="imglogo"
            src={Logo}
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="bigdivnavlinks navbar-nav me-auto mb-2 mb-lg-0 navlinks col-12 col-sm-6 col-md-6 col-lg-10">
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="divlinkNavbar"
              >
                <MdHome />
              </div>
              <div
                onClick={() => {
                  navigate("/shop");
                }}
                className="divlinkNavbar"
              >
                <FaShopify />
              </div>
              <div
                onClick={() => {
                  navigate("/cart");
                }}
                className="divlinkNavbarshopping"
              >
                <FaShoppingCart className="" />{" "}
                <h1 className="h6 h1cartt">{cartItem != 0 ? cartItem : 0}</h1>
              </div>
              <div
                onClick={() => {
                  navigate("/favorite");
                }}
                className="divlinkNavbarshopping"
              >
                <MdFavoriteBorder className="" />{" "}
                <h1 className="h6 h1cartt">
                  {favoriteItem != 0 ? favoriteItem : 0}
                </h1>
              </div>

              <div className="nav-item dropdown">
                <div
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link"
                >
                  <div className="divlinkNavbarshopping">
                    <MdFindInPage />{" "}
                    <IoMdArrowRoundDown className="arrowstyle h6" />
                  </div>
                </div>
                <div className="dropdown-menu">
                  <div className="dropdownmenu">
                    <Link className="linkpagesdropdown" to="contact">
                      Contact
                    </Link>

                    <Link className="linkpagesdropdown" to="aboutus">
                      About Us
                    </Link>

                    <Link className="linkpagesdropdown" to="categories">
                      Categories
                    </Link>

                    <Link className="linkpagesdropdown" to="checkout">
                      Checkout
                    </Link>

                    {CartOwner != undefined && CartOwner != null ? (
                      <Link className="linkpagesdropdown" to="orders">
                        Orders
                      </Link>
                    ) : (
                      ""
                    )}

                    <Link className="linkpagesdropdown" to="faq">
                      FAQ
                    </Link>

                    <Link className="linkpagesdropdown" to="terms">
                      Terms & Conditions
                    </Link>

                    <Link className="linkpagesdropdown" to="login">
                      Login
                    </Link>

                    <Link className="linkpagesdropdown" to="register">
                      Register
                    </Link>

                    <Link className="linkpagesdropdown" to="*">
                      Error404
                    </Link>

                  </div>
                </div>
              </div>
            </div>

            {usertoken ? (
              <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-1 text-end buttonstylediv">
                <div
                  onClick={() => {
                    logout();
                  }}
                  className="divlinkNavbar"
                >
                  <MdLogout />
                </div>
              </div>
            ) : (
              <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-1 text-end buttonstylediv">
                <div
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="divlinkNavbar"
                >
                  <img src={login} />
                </div>
                <div
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="divlinkNavbar"
                >
                  <img src={register} />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
