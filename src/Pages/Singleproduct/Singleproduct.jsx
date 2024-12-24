import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import { CartOperations } from "../../Context/CartOperations";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FavoriteOperations } from "../../Context/FavoriteOperations";
import Swal from "sweetalert2";
import "./Singleproduct.css";

export default function Singleproduct() {
  const [showProduct, setshowProduct] = useState({});
  const [loading, setloading] = useState(true);
  let { AddToFavorite } = useContext(FavoriteOperations);
  const { addtocart, getcartdata } = useContext(CartOperations);
  let { id } = useParams();
  console.log(id);

  async function AddCartItem(id) {
    let { data } = await addtocart(id);
    if (data?.status == "success") {
      Swal.fire({
        text: "This Product Added Successfully To Your Cart",
        icon: "success",
      });
    }
    console.log(data);
  }

  async function GetCartData() {
    let { data } = await getcartdata();
    if (data) {
      setloading(false);
    }
  }

  async function addtowishlist(id) {
    let { data } = await AddToFavorite(id);
    if (data?.status == "success") {
      Swal.fire({
        text: "This Product Added Successfully To Your Favorite",
        icon: "success",
      });
    }
    console.log(data);
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    arrows: false,
  };

  async function Api() {
    let { data } = await axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    setshowProduct(data?.data);
    setloading(false);
  }

  useEffect(() => {
    Api();
    GetCartData();
  }, []);

  return (
    <>
      <div className="bigdiv">
        {loading ? (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="orange"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass="loaderstylepages"
            visible={true}
          />
        ) : (
          <div className="divproduct col-12 wow animate__animated animate__fadeInDownBig animate__slow">
            <div className="col-10 col-sm-5 col-md-4 col-lg-3">
              {showProduct.images?.length > 1 ? (
                <Slider {...settings}>
                  {showProduct?.images?.map((image) => (
                    <img
                      key={showProduct.id}
                      className="w-100"
                      src={image}
                      alt={showProduct.id}
                    />
                  ))}
                </Slider>
              ) : (
                <img
                  key={showProduct?.id}
                  className="w-100"
                  src={showProduct?.imageCover}
                  alt={showProduct?.id}
                />
              )}
            </div>

            <div className="col-11 col-md-6 col-lg-7 details">
              <h5 className="title">{showProduct?.title}</h5>
              <p className="decription">{showProduct?.description}</p>
              <div className="productdetails">
                <span>{showProduct?.category?.name}</span>
                <span>{showProduct?.price} EGP</span>
                <span className="spanrating">
                  <FaStar className="fontawsome" />{" "}
                  {showProduct?.ratingsAverage}
                </span>
              </div>

              <div className="col-12 AddToCartandfavoritestyles">
                <div className="col-12 col-sm-5 col-md-5 col-lg-3">
                  <Link
                    onClick={() => {
                      AddCartItem(showProduct.id);
                    }}
                    className="IconsCardsingleproduct"
                  >
                    <FaCartPlus /> Add To Cart
                  </Link>
                </div>

                <div className="col-12 col-sm-5 col-md-5 col-lg-3">
                  <Link
                    onClick={() => {
                      addtowishlist(showProduct.id);
                    }}
                    className="IconsCardsingleproduct"
                  >
                    <FaHeart /> Add Wishlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
