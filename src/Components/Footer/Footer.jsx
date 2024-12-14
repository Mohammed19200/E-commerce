import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Shopping_Bag_Online_Market_Logo-transformed (1).png";
import "./Footer.css";

export default function Footer() {
  let navigate = useNavigate();
  let CartOwner = localStorage.getItem("cartOwner");

  return (
    <>
      <div className="col-12 bigestdivfooter">
        <div className="col-12 col-lg-10 bigdivfooter">
          <p className=" col-12 col-sm-6 col-md-4 pargfooter">
            © 2024 Company, Inc
          </p>

          <div className="col-12 col-sm-6 col-md-3 divimgfooter">
            <img
              onClick={() => {
                navigate("/");
              }}
              className="imglogo"
              src={Logo}
              alt=""
            />
          </div>

          <div className="linksfooter col-12 col-sm-12  col-md-4">
            <div className="col-12 linksfooter linkfooterstyle">
              <Link className="linkFooter" to="/">
                Home
              </Link>
              <Link className="linkFooter" to="shop">
                Shop
              </Link>
              <Link className="linkFooter" to="cart">
                Cart
              </Link>
              <Link className="linkFooter" to="favorite">
                Favorite
              </Link>

              <div className="nav-item dropdown">
                <div
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle linkFooter"
                >
                  Pages
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

                    <Link className="linkpagesdropdownfooter" to="login">
                      Login
                    </Link>

                    <Link className="linkpagesdropdownfooter" to="register">
                      Register
                    </Link>

                    <Link className="linkpagesdropdownfooter" to="*">
                      Error404
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
