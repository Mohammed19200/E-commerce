import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import "./ProductCard.css";
import axios from "axios";
import Swal from "sweetalert2";

export default function ProductCard({ product }) {
  let navigate = useNavigate();

  let headers = {
    token: localStorage.getItem("userToken"),
  };

  async function AddCartItem(productId) {
    return await axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId,
        },
        {
          headers,
        }
      )
      .then((response) => {
        if (response?.data?.status == "success") {
          Swal.fire({
            text: `${response?.data?.message}`,
            icon: "success",
          });
        }
      })
      .catch((err) => err);
  }

  async function addtowishlist(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          productId,
        },
        {
          headers,
        }
      )
      .then((response) => {
        if (response?.data?.status == "success") {
          Swal.fire({
            text: `${response?.data?.message}`,
            icon: "success",
          });
        }
      })
      .catch((err) => err);
  }

  function FindUserToAddToCart(id) {
    if (localStorage.getItem("userToken") != null) {
      AddCartItem(id);
    } else {
      navigate("/login");
    }
  }

  function FindUserToAddToFavorite(id) {
    if (localStorage.getItem("userToken") != null) {
      addtowishlist(id);
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      <div className="cardstyle">
        <div className="bigdiv">
          <div className="buttonss">
            <div className="buttonssstyles">
              <Link
                onClick={() => {
                  FindUserToAddToCart(product.id);
                }}
                className="IconsCard"
              >
                <FaCartPlus />
              </Link>
            </div>

            <div className="buttonssstyles">
              <Link
                onClick={() => {
                  FindUserToAddToFavorite(product.id);
                }}
                className="IconsCard"
              >
                <FaHeart />
              </Link>
            </div>

            <div className="buttonssstyles">
              <Link to={`/singleproduct/${product.id}`} className="IconsCard">
                <IoEye />
              </Link>
            </div>
          </div>

          <img src={product.imageCover} alt={product.title} className="w-100" />
          <span className="category h6">{product.category.name}</span>
          <h3 className="h5 titleshop">
            {product.title.split(" ").splice(0, 2).join(" ")}
          </h3>
          <div className="spandiv">
            <span className="price">{product.price} EGP</span>
            <span className="spanrating">
              <FaStar className="fontawsome" /> {product.ratingsAverage}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
