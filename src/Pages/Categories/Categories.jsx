import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { useQuery } from "react-query";
import axios from "axios";
import { ProductOperations } from "../../Context/ProductOperations";
import "./Categories.css";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BallTriangle } from "react-loader-spinner";


export default function Categories() {
  let { getcategories } = useContext(ProductOperations);
  const [category, setcategory] = useState([]);
  const [specificcategory, setspecificcategory] = useState([]);
  const [loading, setloading] = useState(true);

  function ShowData() {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?limit=56`
    );
  }

  let { data } = useQuery("featureproduct", ShowData);

  async function Categoriess() {
    setloading(true);
    let { data } = await getcategories();
    setcategory(data?.data);
    setloading(false);
  }

  useEffect(() => {
    Categoriess();
  }, []);

  function show(name) {
    let CartData = data?.data?.data?.filter((product) => {
      return product.category.name == name;
    });
    setspecificcategory(CartData);
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplayspeed: 600,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
    ],
  };

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
          wrapperClass="d-flex align-items-center justify-content-center"
          visible={true}
        />
      ) : (
        <div className="wow animate__animated animate__fadeInLeftBig animate__slow">
          <Slider className="col-11 m-auto slidercategories" {...settings}>
            {category.map((categorey) => {
              return (
                <Card key={categorey._id} className="CardStyleCategories">
                  <Card.Img
                    className=""
                    height={200}
                    variant="top"
                    src={categorey.image}
                    alt={categorey.name}
                  />
                  <Card.Body className="cardbody">
                    <Card.Title>{categorey.name}</Card.Title>
                    <Button
                      onClick={() => {
                        show(categorey.name);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Show Category
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Slider>

          <div
            className="modal fade col-12"
            id="staticBackdrop"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className=" modal-dialog modal-xl col-11 col-md-11 col-lg-10 m-auto">
              <div className="modal-content col-12">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body col-12">
                  <div className="col-12 cardshopp wow animate__animated animate__fadeInRightBig animate__slow">
                    {specificcategory.length == 0 ? (
                      <h1 className="h5">
                        Products in this category will be available soon.
                      </h1>
                    ) : (
                      specificcategory.map((product) => {
                        return (
                          <div
                            className="col-10 col-sm-5 col-md-4 col-lg-3 col-xl-2"
                            key={`products-shop-${product.id}`}
                          >
                            <ProductCard product={product} />
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
