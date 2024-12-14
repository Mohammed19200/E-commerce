import React, { useEffect } from "react";
import Slider from "react-slick";
import slider1 from "../../assets/slader1..webp";
import img3 from "../../assets/slider.webp";
import { useNavigate } from "react-router-dom";
import Categories from "../Categories/Categories";
import Popularproducts from "../../Components/Popularproducts/Popularproducts";
import SpecialOffers from "../../Components/SpecialOffers/SpecialOffers";
import Modal from "../../Components/Modal/Modal";
import "./Home.css";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import TimerOffer from "../../Components/Timer/TimerOffer/TimerOffer";
import Wow from "wowjs";
import camera from "../../assets/cameraoffer-removebg-preview.png";
import arm from "../../assets/armyoffer-removebg-preview.png";
import UserReview from "../../Components/UserReview/UserReview";
import ExplainProduct from "../../Components/ExplainProduct/ExplainProduct";
import ExplainProduct2 from "../../Components/ExplainProduct/ExplainProduct2";

export default function Home() {
  let navigate = useNavigate();

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    arrows: false,
  };

  useEffect(() => {
    new Wow.WOW().init();
  }, []);

  return (
    <div className="col-12 bigestdivhome">
      <Modal />

      <Slider
        className="col-12 wow animate__animated animate__backInDown animate__slow"
        {...settings}
      >
        <div className="imagedescription">
          <div className="descriptionimage">
            <h1 className="h1descriptionimage">Limited Offer</h1>
            <h3 className="h3descriptionimage">Up To 50%</h3>
            <button
              onClick={() => {
                navigate("/shop");
              }}
              className="buttondescriptionimage"
            >
              Shop Now
            </button>
          </div>
          <img src={slider1} className="w-100 imgstyles1" alt="img1" />
        </div>

        <div className="imagedescription">
          <div className="descriptionimage">
            <h1 className="h1descriptionimage">Men Collection</h1>
            <h3 className="h3descriptionimage">Up To 50%</h3>
            <button
              onClick={() => {
                navigate("/shop");
              }}
              className="buttondescriptionimage"
            >
              Shop Now
            </button>
          </div>
          <img src={img3} className="w-100 imgstyles1" alt="img2" />
        </div>
      </Slider>

      <div className="col-12 categoriesinhome wow animate__animated animate__backInLeft animate__slow">
        <h1 className="text-center h3 col-12 animate__animated animate__flipInX animate__infinite animate__slow">
          Categories
        </h1>
        <Categories />
      </div>

      <div className="col-12 bigestdivofferss">
        <div className="col-11 col-sm-5 col-md-5 firstdivoffer wow animate__animated animate__backInLeft animate__slow">
          <h1 className="h1offersstyles h4">PS5 DualSense Charging</h1>

          <h3 className="h3offersstyles h6">Just Starting At 1000 EGP</h3>

          <button
            onClick={() => {
              navigate("/shop");
            }}
            className="btn btn-primary btnoffer"
          >
            Shop Now
          </button>

          <div className="divimageoffer col-12">
            <img src={arm} height={257} alt="" className="imgofferstyle1" />
          </div>
        </div>

        <div className="col-11 col-sm-5 col-md-5 firstdivoffer wow animate__animated animate__backInRight animate__slow">
          <h1 className="h1offersstyles h4">EOS M50 Mark</h1>

          <h3 className="h3offersstyles h6">Just Starting At 19000 EGP</h3>

          <button
            onClick={() => {
              navigate("/shop");
            }}
            className="btn btn-primary btnoffer"
          >
            Shop Now
          </button>

          <div className="divimageoffer col-10">
            <img src={camera} height={257} alt="" className="imgofferstyle2" />
          </div>
        </div>
      </div>

      <div className="col-11 col-md-10 col-lg-10 m-auto divVideosAboutus wow animate__animated animate__backInLeft animate__slow">
        <iframe
          className="col-12 VideosAboutus"
          src="https://www.youtube.com/embed/9XYIvdscCxk?si=oLmLkZ8qMRpM91C9"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-12 wow animate__animated animate__backInRight animate__slow">
        <ExplainProduct />
      </div>

      <div className="col-12 bigdivh1timer wow animate__animated animate__backInUp animate__slow">
        <h1 className=" col-6 col-sm-4 col-md-3 col-lg-2 h3 h1timmer animate__animated animate__flash animate__infinite animate__slower">
          Hurry Up !
        </h1>
      </div>
      <div className="wow animate__animated animate__backInUp animate__slow">
        <TimerOffer />
      </div>

      <div className="col-12 categoriesinhome wow animate__animated animate__backInRight animate__slow">
        <h1 className="h3 text-center col-12 animate__animated animate__shakeX animate__infinite animate__slower">
          Popular products
        </h1>
        <Popularproducts />
      </div>

      <div className="col-12 wow animate__animated animate__backInLeft animate__slow">
        <ExplainProduct2 />
      </div>

      <div className="col-12 categoriesinhome wow animate__animated animate__backInRight animate__slow">
        <h1 className="h3 text-center col-12 animate__animated animate__fadeOut animate__infinite animate__slow">
          Special Offers
        </h1>
        <SpecialOffers />
      </div>

      <div className="col-12 wow animate__animated animate__backInLeft animate__slow">
        <UserReview />
      </div>

      <div className="col-12 categoriesinhome wow animate__animated animate__backInRight animate__slow">
        <h1 className="h3 text-center col-12 animate__animated animate__heartBeat animate__infinite animate__slow">
          Latest Products
        </h1>
        <LatestProducts />
      </div>
    </div>
  );
}
