import axios from "axios";
import { createContext } from "react";

export let FavoriteOperations = createContext();

export default function FavoriteOperationsprovider(props) {
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  function AddToFavorite(productId) {
    if (headers?.token != null) {
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
        .then((response) => response)
        .catch((err) => err);
    }
  }

  function GetData() {
    if (headers?.token != null) {
      return axios
        .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
          headers,
        })
        .then((response) => response)
        .catch((err) => err);
    }
  }

  function DeleteProductItem(productId) {
    if (headers?.token != null) {
      return axios
        .delete(
          `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
          {
            headers,
          }
        )
        .then((response) => response)
        .catch((err) => err);
    }
  }

  return (
    <FavoriteOperations.Provider
      value={{ AddToFavorite, GetData, DeleteProductItem }}
    >
      {props.children}
    </FavoriteOperations.Provider>
  );
}
