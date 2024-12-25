import React, { useContext, useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import "./CartCheckout.css";
import { CartOperations } from "./../../Context/CartOperations";
import { Helmet } from "react-helmet";
export default function CartCheckout() {
  const [loading, setloading] = useState(true);
  const { getcartdata } = useContext(CartOperations);
  const [cartItem, setcartItem] = useState();

  async function Items() {
    let { data } = await getcartdata();

    if (data) {
      setcartItem(data);
      setloading(false);
    } else {
      setloading(true);
    }
  }

  useEffect(() => {
    Items();
  }, []);

  return (
    <div className="col-12 wow animate__animated animate__fadeInRightBig animate__slow">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart Checkout</title>
      </Helmet>

      {loading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="orange"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass="loaderstyleshop"
          visible={true}
        />
      ) : (
        <div className="">
          <table className="table table-dark table-striped">
            <thead className="">
              <tr className="">
                <th className="thImage">Image</th>
                <th className="thName">Name</th>
                <th className="thPrice">Price</th>
                <th className="thCount">Count</th>
                <th className="thTotal">Total</th>
              </tr>
            </thead>
            <tbody className="">
              {cartItem?.data?.products?.map((product) => {
                return (
                  <tr className="" key={product.product.id}>
                    <td>
                      <img
                        className="col-12 col-sm-8 col-md-6 col-lg-10 col-xl-10 col-xxl-6"
                        height={70}
                        src={product.product.imageCover}
                        alt={product.product.title}
                      />
                    </td>
                    <td className="tdtitle">
                      {product.product.title.split(" ").splice(0, 2).join(" ")}
                    </td>
                    <td className="tdprice">{product.price}</td>
                    <td>{product.count}</td>
                    <td className="tdtotal">{product.count * product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
