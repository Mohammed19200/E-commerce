import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Cart.css";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function Cart() {
  const [loading, setloading] = useState(true);

  const [cartItem, setcartItem] = useState();

  let navigate = useNavigate();

  let headers = {
    token: localStorage.getItem("userToken"),
  };

  async function Items() {
    return await axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      })
      .then((response) => {
        setcartItem(response?.data);
        localStorage.setItem("cartId", response?.data?.cartId);
        localStorage.setItem("cartOwner", response?.data?.data?.cartOwner);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function DeleteProduct(productId) {
    return await axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((response) => {
        if (response?.data) {
          Swal.fire({
            title: "Do you want to delete this product ?",
            showCancelButton: true,
            confirmButtonText: "Delete",
          }).then((result) => {
            if (result.isConfirmed) {
              if (response?.data?.status == "success") {
                Swal.fire("this product is deleted successfully");
                setcartItem(response?.data);
                setloading(false);
              }
            }
          });
        }
      })
      .catch((err) => err);
  }

  async function UpdateQuantity(productId, count) {
    if (count < 1) {
      if (productId) {
        await DeleteProduct(productId);
        setloading(false);
      }
    } else {
      return await axios
        .put(
          `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
          {
            count: count,
          },
          {
            headers,
          }
        )
        .then((response) => {
          if (response?.data) {
            setcartItem(response?.data);
            setloading(false);
            Swal.fire({
              title: "Good job!",
              text: `This Product Count Be ${count}`,
              icon: "success",
            });
          }
        })
        .catch((err) => err);
    }
  }

  useEffect(() => {
    Items();
  }, []);

  return (
    <div className="paddingCart">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
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
          <div className="col-12 wow animate__animated animate__fadeInLeftBig animate__slow">
            {cartItem?.numOfCartItems == 0 ? (
              <div className="col-12 divemptycart">
                <h1 className="cartitem1 col-8 col-sm-6 col-md-5 col-lg-3 m-auto h5 animate__animated animate__flash animate__infinite animate__slower">
                  Your Cart Is Empty
                </h1>
              </div>
            ) : (
              <h1 className="titlecart col-12 h5">Shop Cart</h1>
            )}

            {cartItem ? (
              <>
                <div className="col-12 col-md-10 col-lg-8 bigestdivcart">
                  {cartItem?.data?.products.map((product) => {
                    return (
                      <div
                        key={product?.product?.id}
                        className="col-12 bigdivcart"
                      >
                        <div className=" col-6 col-md-6 firstdiv">
                          <div className="col-6 col-sm-3 col-md-3 col-xl-2">
                            <Link to={`/singleproduct/${product?.product?.id}`}>
                              <img
                                className="w-100 imagecart"
                                src={product?.product.imageCover}
                                alt={product?.product.title}
                              />
                            </Link>
                          </div>
                          <div className="col-8 col-md-6 firstdiv1 ">
                            <Link
                              to={`/singleproduct/${product?.product.id}`}
                              className="linksinglepage"
                            >
                              <h1 className="TitleCart col-12">
                                {product?.product?.title
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
                                DeleteProduct(product?.product.id);
                              }}
                              className="remove col-12"
                            >
                              <FaRegTrashAlt
                                onClick={() => {
                                  DeleteProduct(product?.product.id);
                                }}
                                className="icontrash"
                              />{" "}
                              remove
                            </h1>
                          </div>
                        </div>

                        <div className="col-5 seconddiv">
                          <button
                            onClick={() => {
                              UpdateQuantity(
                                product?.product.id,
                                product?.count + 1
                              );
                            }}
                            className="buttoncount btn"
                          >
                            +
                          </button>
                          <h1 className="count">{product?.count}</h1>
                          <button
                            onClick={() => {
                              UpdateQuantity(
                                product?.product?.id,
                                product?.count - 1
                              );
                            }}
                            className="buttoncount btn"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {cartItem?.numOfCartItems != 0 ? (
                    <div className="checkoutdiv col-12">
                      <h1 className="cartitem col-12 h5">
                        Num Of Cart Items : {cartItem?.numOfCartItems}
                      </h1>
                      <h1 className="total col-12 h5">
                        Total Cart Price : {cartItem?.data?.totalCartPrice}
                      </h1>
                      <button
                        onClick={() => {
                          navigate("/checkout");
                        }}
                        className="btn buttoncheckout"
                      >
                        Checkout
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
