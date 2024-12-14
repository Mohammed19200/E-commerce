import axios from "axios";
import { createContext } from "react";

export let ProductOperations = createContext();

export default function ProductOperationsprovider(props) {
  function getcategories() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((response) => response)
      .catch((err) => err);
  }

  function AllProduct() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/products?limit=56`)
      .then((response) => response)
      .catch((err) => err);
  }

  return (
    <ProductOperations.Provider value={{ getcategories, AllProduct }}>
      {props.children}
    </ProductOperations.Provider>
  );
}
