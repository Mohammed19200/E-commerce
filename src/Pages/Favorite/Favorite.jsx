import React, { useContext, useEffect, useState } from "react";
import { FavoriteOperations } from "../../Context/FavoriteOperations";
import { BallTriangle } from "react-loader-spinner";
import "./Favorite.css";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { CartOperations } from "../../Context/CartOperations";
import { toast } from "react-toastify";

export default function Favorite() {
  const [loading, setloading] = useState(true);
  let { GetData, DeleteProductItem } = useContext(FavoriteOperations);
  const [favoriteItem, setfavoriteItem] = useState();
  let { addtocart } = useContext(CartOperations);

  async function AddCartItem(id) {
    let { data } = await addtocart(id);
    if (data?.status == "success") {
      toast.success(data?.message);
    }
    console.log(data);
  }

  async function getdata() {
    let { data } = await GetData();
    if (data) {
      setfavoriteItem(data);
      setloading(false);
    } else {
      setloading(true);
    }
  }

  async function DeletePrroduct(id) {
    setloading(true);
    let { data } = await DeleteProductItem(id);
    console.log(data);

    Swal.fire({
      title: "Do you want to delete this product ?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        if (data?.status == "success") {
          Swal.fire("this product is deleted successfully", "", "success");
          setfavoriteItem(data);
          setloading(false);
        }
      }
      setloading(false);
    });
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="paddingCart">
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

            <div className="col-12 col-md-10 col-lg-8 bigestdivcart">
              {favoriteItem?.data.map((product) => {
                return (
                  <div key={product.id} className="col-12 bigdivcart">
                    <div className=" col-6 col-md-6 firstdiv">
                      <div className="col-6 col-sm-3 col-md-3 col-xl-2">
                        <Link to={`/singleproduct/${product.id}`}>
                          <img
                            className="w-100 imagecart"
                            src={product.imageCover}
                            alt={product.title}
                          />
                        </Link>
                      </div>
                      <div className="col-8 col-md-6 firstdiv1 ">
                        <Link
                          to={`/singleproduct/${product.id}`}
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
                          price : {product.price}
                        </h1>
                        <h1
                          onClick={() => {
                            DeletePrroduct(product.id);
                          }}
                          className="remove col-12"
                        >
                          <FaRegTrashAlt className="icontrash" /> remove
                        </h1>
                      </div>
                    </div>

                    <div className="col-5 seconddiv">
                      <Link
                        onClick={() => {
                          AddCartItem(product.id);
                        }}
                        className="buttonfavorite btn"
                      >
                        <FaCartPlus />
                      </Link>
                    </div>
                  </div>
                );
              })}

              {favoriteItem?.count != 0 ? (
                <h1 className="favoriteitem col-12 h5">
                  Num Of Favorite Items : {favoriteItem?.count}
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
