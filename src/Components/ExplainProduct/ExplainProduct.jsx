import { useContext, useEffect, useState } from "react";
import { ProductOperations } from "../../Context/ProductOperations";
import { useNavigate } from "react-router-dom";
import "./ExplainProduct.css";
import { BallTriangle } from "react-loader-spinner";

export default function ExplainProduct() {
  let { AllProduct } = useContext(ProductOperations);
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  let navigate = useNavigate();

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

  let FilterProduct = products.find((product) => {
    return product.id == "6408d8bc6406cd15828e8f00";
  });

  return (
    <>
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
        <div className="col-12 bigdivexplainproduct">
          <div className="col-11 col-sm-10 col-md-7 col-lg-6 col-xl-7 seconddivdescriptionexplainproduct">
            <h1 className="h3">
              {FilterProduct?.title?.split(" ")?.splice(0, 3)?.join(" ")}
            </h1>
            <p className="col-xl-11 pExplain">{FilterProduct?.description}</p>
            <button
              onClick={() => {
                navigate(`/singleproduct/6408d8bc6406cd15828e8f00`);
              }}
              className="btn btn-primary"
            >
              View More
            </button>
          </div>

          <div className="col-10 col-sm-7 col-md-4 col-lg-3">
            <img className="w-100" src={FilterProduct?.imageCover} alt="" />
          </div>
        </div>
      )}
    </>
  );
}
