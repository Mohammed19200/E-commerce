import ProductCard from "../../Components/ProductCard/ProductCard";
import { BallTriangle } from "react-loader-spinner";
import { useContext, useEffect, useState } from "react";
import { ProductOperations } from "../../Context/ProductOperations";
import Wow from "wowjs";
import "./Shop.css";

export default function Shop() {
  
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [inputvalue, setinputvalue] = useState("");
  let { AllProduct } = useContext(ProductOperations);

  async function ShowData() {
    setloading(true);
    let { data } = await AllProduct();

    if (data) {
      setproducts(data?.data);
      setloading(false);
    }
  }

  useEffect(() => {
    ShowData();
  }, []);

  useEffect(() => {
    new Wow.WOW().init();
  }, []);

  return (
    <>
      <div className="col-12 cardshopp">
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
          <div className="col-12 cardshopp wow animate__animated animate__fadeInDownBig animate__slow">
            <div className="col-12">
              <div className="col-7 m-auto">
                <input
                  onChange={(e) => setinputvalue(e.target.value)}
                  className="form-control col-12"
                  type="text"
                  placeholder="Search By Title Or Category"
                />
              </div>
            </div>

            {products.map((product) => {
              if (
                product.title
                  .toLowerCase()
                  .includes(inputvalue.toLowerCase()) ||
                product.category.name
                  .toLowerCase()
                  .includes(inputvalue.toLowerCase())
              ) {
                return (
                  <div
                    className="col-10 col-sm-5 col-md-3 col-lg-2"
                    key={`products-shop-${product.id}`}
                  >
                    <ProductCard product={product} />
                  </div>
                );
              } else {
                console.log("not found");
              }
            })}
          </div>
        )}
      </div>
    </>
  );
}
