import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
export default function LatestProducts() {
  function ShowData() {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?limit=56`
    );
  }

  let { data, isLoading } = useQuery("PopularProducts", ShowData);
  let filterproduct = data?.data?.data?.filter((product) => {
    return product.category.name == "Men's Fashion";
  });

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
        <Slider className="col-11 m-auto slidercategories" {...settings}>
          {filterproduct?.map((product) => {
            return (
              <div
                className="col-10 col-sm-5 col-md-3 col-lg-2"
                key={`products-shop-${product.id}`}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}
