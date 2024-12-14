import axios from "axios";
import { createContext } from "react";

export let CartOperations = createContext();

export default function CartOperationsprovider(props) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  function addtocart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          productId,
        },
        {
          headers,
        }
      )
      .then((response) => response)
      .catch((err) => err);
  }

  function getcartdata() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      })
      .then((response) => response)
      .catch((err) => err);
  }

  function deleteproductitem(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((response) => response)
      .catch((err) => err);
  }

  function updatequantity(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: count,
        },
        {
          headers,
        }
      )
      .then((response) => response)
      .catch((err) => err);
  }

  return (
    <CartOperations.Provider
      value={{
        addtocart,
        getcartdata,
        deleteproductitem,
        updatequantity,
      }}
    >
      {props.children}
    </CartOperations.Provider>
  );
}
