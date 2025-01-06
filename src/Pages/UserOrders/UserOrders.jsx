import { useEffect, useState } from "react";
import "./UserOrders.css";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Orders() {
  const [userOrder, setuserOrder] = useState([]);
  const [loading, setloading] = useState(true);

  let CartOwner = localStorage.getItem("cartOwner");

  async function UserOrder() {
    setloading(true);
    if (CartOwner != undefined && CartOwner != null) {
      return await axios
        .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${CartOwner}`)
        .then((data) => {
          if (data) {
            setuserOrder(data?.data);
            setloading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(CartOwner);
      setloading(false);
    }
  }

  useEffect(() => {
    UserOrder();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Orders</title>
      </Helmet>

      <h1 className="h3 col-11 col-12 text-center py-2">Your Orders</h1>

      {loading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="orange"
          ariaLabel="ball-triangle-loading"
          wrapperClass="loaderstyleshop"
          visible={true}
        />
      ) : (
        <>
          {userOrder.map((product, index) => {
            return (
              <>
                <div key={product.id} className="Bigestdivorders col-12">
                  <div className="col-11 col-sm-11 col-md-11 col-lg-5 firstdivOrders">
                    <h1 className="h5 col-11 text-center pb-2">
                      Order <span className="spanOrders">{index + 1}</span>
                    </h1>
                    <h1 className="h4 h1OOrders col-11">
                      Address :{" "}
                      <span className="spanOrders">
                        {product.shippingAddress.details}
                      </span>
                    </h1>
                    <h1 className="h4 h1OOrders col-11">
                      City :{" "}
                      <span className="spanOrders">
                        {product.shippingAddress.city}
                      </span>
                    </h1>
                    <h1 className="h4 h1OOrders col-11">
                      Phone :{" "}
                      <span className="spanOrders">
                        {product.shippingAddress.phone}
                      </span>
                    </h1>
                    <h1 className="h4 h1OOrders col-11">
                      Created At :{" "}
                      <span className="spanOrders">{product.createdAt}</span>
                    </h1>
                    <h1 className="h4 h1OOrders col-11">
                      Shipping Price :{" "}
                      <span className="spanOrders">
                        {product.shippingPrice}
                      </span>
                    </h1>
                    <h1 className="h4 h1OOrders col-11">
                      Tax Price :{" "}
                      <span className="spanOrders">{product.taxPrice}</span>
                    </h1>
                    <h1 className="h4 h1OOrders col-11">
                      Total Order Price :{" "}
                      <span className="spanOrders">
                        {product.totalOrderPrice}
                      </span>
                    </h1>
                  </div>

                  <div
                    key={product.id}
                    className="col-12 col-sm-11 col-md-11 col-lg-6"
                  >
                    <table className="table table-dark table-striped">
                      <thead>
                        <tr>
                          <th className="thImage">Image</th>
                          <th className="thName">Name</th>
                          <th className="thPrice">Price</th>
                          <th className="thCount">Count</th>
                          <th className="thTotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.cartItems.map((product) => {
                          return (
                            <tr key={product._id}>
                              <td>
                                <img
                                  height={70}
                                  src={product.product.imageCover}
                                  alt={product.product.title}
                                />
                              </td>
                              <td className="tdtitle">
                                {product.product.title
                                  .split(" ")
                                  .splice(0, 2)
                                  .join(" ")}
                              </td>
                              <td className="tdprice">{product.price}</td>
                              <td>{product.count}</td>
                              <td className="tdtotal">
                                {product.count * product.price}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
}
