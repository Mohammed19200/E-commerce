import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import ProductCard from "../ProductCard/ProductCard";

export default function SpecialOffers() {
  function ShowData() {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?limit=10`
    );
  }

  let { data, isLoading } = useQuery("Specialoffer", ShowData);

  return (
    <div className="col-12 Popularproduct">
      {isLoading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="orange"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        data?.data?.data?.map((product) => {
          return (
            <div
              className="col-10 col-sm-5 col-md-3 col-lg-2"
              key={`products-shop-${product.id}`}
            >
              <ProductCard product={product} />
            </div>
          );
        })
      )}
    </div>
  );
}
