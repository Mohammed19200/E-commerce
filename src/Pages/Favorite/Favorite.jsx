import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Favorite.css";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Favorite() {
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  const [loading, setloading] = useState(true);
  const [favoriteItem, setfavoriteItem] = useState();

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
          localStorage.setItem("cartOwner", response?.data?.data?.cartOwner);
          Swal.fire({
            text: "This Product Added Successfully To Your Cart",
            icon: "success",
          });
        }
      })
      .catch((err) => err);
  }

  async function getdata() {
    return await axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers,
      })
      .then((response) => {
        setfavoriteItem(response?.data);
        setloading(false);
      })
      .catch((err) => err);
  }

  async function DeletePrroduct(productId) {
    return await axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers,
      })
      .then((response) => {
        Swal.fire({
          title: "Do you want to delete this product ?",
          showCancelButton: true,
          confirmButtonText: "Delete",
        }).then((result) => {
          if (result.isConfirmed) {
            if (response?.data?.status == "success") {
              Swal.fire(`${response?.data?.message}`);
              let filterDeleteProduct = favoriteItem?.data.filter((product) => {
                return product?.id != productId;
              });
              let newProducts = {
                status: favoriteItem.status,
                count: favoriteItem.count,
                data: filterDeleteProduct,
              };
              setfavoriteItem(newProducts);
              setloading(false);
            }
          }
        });
      })
      .catch((err) => err);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="paddingCart">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Favorite</title>
      </Helmet>

      <div className="thebigestdivcart">
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
          <div className="col-12 wow animate__animated animate__fadeInRightBig animate__slow">
            {favoriteItem?.count == 0 ? (
              <div className="col-12 divemptycart">
                <h1 className="cartitem1 col-8 col-sm-6 col-md-5 col-lg-3 m-auto h5 animate__animated animate__flash animate__infinite animate__slower">
                  Your Wishlist Is Empty
                </h1>
              </div>
            ) : (
              <h1 className="titlecart col-12 h5">Favorite List</h1>
            )}

            {favoriteItem ? (
              <div className="col-12 col-md-10 col-lg-8 bigestdivcart">
                {favoriteItem?.data.map((product) => {
                  return (
                    <div key={product?.id} className="col-12 bigdivcart">
                      <div className=" col-6 col-md-6 firstdiv">
                        <div className="col-6 col-sm-3 col-md-3 col-xl-2">
                          <Link to={`/singleproduct/${product?.id}`}>
                            <img
                              className="w-100 imagecart"
                              src={product?.imageCover}
                              alt={product?.title}
                            />
                          </Link>
                        </div>
                        <div className="col-8 col-md-6 firstdiv1 ">
                          <Link
                            to={`/singleproduct/${product?.id}`}
                            className="linksinglepage"
                          >
                            <h1 className="TitleCart col-12">
                              {product?.title
                                ?.split(" ")
                                ?.splice(0, 2)
                                ?.join(" ")}
                            </h1>
                          </Link>
                          <h1 className="price col-12">
                            price : {product?.price}
                          </h1>
                          <h1
                            onClick={() => {
                              DeletePrroduct(product?.id);
                            }}
                            className="remove col-12"
                          >
                            <FaRegTrashAlt
                              onClick={() => {
                                DeletePrroduct(product?.id);
                              }}
                              className="icontrash"
                            />{" "}
                            remove
                          </h1>
                        </div>
                      </div>

                      <div className="col-5 seconddiv">
                        <Link
                          onClick={() => {
                            AddCartItem(product?.id);
                          }}
                          className="buttonfavorite btn"
                        >
                          <FaCartPlus
                            onClick={() => {
                              AddCartItem(product?.id);
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
