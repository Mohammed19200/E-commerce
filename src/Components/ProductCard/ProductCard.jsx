import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { CartOperations } from "../../Context/CartOperations";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import "./ProductCard.scss";
import { FavoriteOperations } from "../../Context/FavoriteOperations";
import axios from "axios";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import { Usercontext } from "../../Context/UserToken";

export default function ProductCard({ product }) {
  let { AddToFavorite } = useContext(FavoriteOperations);
  let { addtocart } = useContext(CartOperations);
  let { usertoken } = useContext(Usercontext);

  let navigate = useNavigate();

  let headers = {
    token: localStorage.getItem("userToken"),
  };

  async function ShowCartData() {
    return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers,
    });
  }

  let { data } = useQuery("CartItem", ShowCartData);

  async function AddCartItem(id) {
    let y = await data?.data?.data?.products?.find((product) => {
      return product?.product?.id == id;
    });

    if (y != undefined) {
      await data?.data?.data?.products?.map((product) => {
        if (product?.product?.id == id) {
          Swal.fire("This Product Already In Your Cart!");
        }
      });
    } else if (y == undefined) {
      let { data } = await addtocart(id);
      localStorage.setItem("cartOwner", data?.data?.cartOwner);
      localStorage.setItem("cartId", data?.cartId);
      if (data?.status == "success") {
        toast.success(data?.message);
        console.log(data);
      }
    }
  }

  async function addtowishlist(id) {
    let { data } = await AddToFavorite(id);
    if (data?.status == "success") {
      toast.success(data?.message);
    }
    console.log(data);
  }

  function FindUserToAddToCart(id) {
    if (usertoken && localStorage.getItem("userToken")) {
      AddCartItem(id);
    } else {
      navigate("/login");
    }
  }

  function FindUserToAddToFavorite(id) {
    if (usertoken && localStorage.getItem("userToken")) {
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
