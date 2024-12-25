import React from "react";
import "./Aboutus.css";
import img from "../../assets/aboutus.webp";
import img1 from "../../assets/aboutus1.webp";
import img2 from "../../assets/aboutus2.webp";
import img3 from "../../assets/aboutus3.webp";
import img4 from "../../assets/aboutus4.webp";
import UserReview from "../../Components/UserReview/UserReview";
import { Helmet } from "react-helmet";

export default function Aboutus() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 10000,
    arrows: true,
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About US</title>
      </Helmet>

      <div className="col-12 bigdivExplainAboutus wow animate__animated animate__fadeInDownBig animate__slow ">
        <div className="col-11 col-md-10 col-lg-5 col-xl-5 col-xxl-5 divExplainAboutus">
          <h1 className="h1Aboutus h3 animate__animated animate__flipInX animate__infinite animate__slow">
            Shopping E-Commerce
          </h1>
          <p className="PAboutus">
            Shopping E-Commerce is a dynamic and innovative online retail
            platform that offers a wide range of products to customers
            worldwide. Established in 2024, our company has rapidly grown to
            become a prominent player in the eCommerce industry. Our mission is
            to provide customers with a seamless and convenient shopping
            experience while offering a diverse selection of high-quality
            products.
          </p>
          <p className="PAboutus">
            Shopping E-Commerce is dedicated to setting new standards in the
            eCommerce landscape, providing convenience, choice, and quality to
            our valued customers.
          </p>
        </div>

        <img
          className="col-11 col-md-10 col-lg-5 col-xl-5 col-xxl-4 ImgAboutus"
          src={img}
          alt=""
        />
      </div>

      <div className="col-11 col-md-10 col-lg-9 m-auto divVideosAboutus wow animate__animated animate__fadeInLeftBig animate__slow">
        <iframe
          className="col-12 VideosAboutus "
          src="https://www.youtube.com/embed/wf4F2-9UXUo?si=km2gkGxW1WC03hPN"
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-12 wow animate__animated animate__fadeInRightBig animate__slow">
        <UserReview />
      </div>

      <div className="bigdivteamAboutus wow animate__animated animate__fadeInUpBig animate__slow">
        <h1
          className="h2 col-11 col-md-12 animate__animated animate__fadeOut animate__infinite animate__slow"
          style={{ textAlign: "center" }}
        >
          Meet Our Team
        </h1>
        <p
          style={{ textAlign: "center", paddingBottom: "1rem" }}
          className="col-11 col-md-12 m-auto"
        >
          A perfect blend of creativity and technical wizardry The best people
          fomula for great websites!
        </p>

        <div className="divteamaboutas col-12">
          <div className="teamdiv col-10 col-sm-5 col-md-3 col-lg-2">
            <img className="imgteam col-12" src={img1} alt="" />
            <h1 className="h1team h4">Marcos Alonso</h1>
            <p className="pteam">Founder of drou</p>
          </div>

          <div className="teamdiv col-10 col-sm-5 col-md-3 col-lg-2">
            <img className="imgteam col-12" src={img2} alt="" />
            <h1 className="h1team h4">Annie Taylor</h1>
            <p className="pteam">Operations</p>
          </div>

          <div className="teamdiv col-10 col-sm-5 col-md-3 col-lg-2">
            <img className="imgteam col-12" src={img3} alt="" />
            <h1 className="h1team h4">Rebecca flex</h1>
            <p className="pteam">Support staff</p>
          </div>

          <div className="teamdiv col-10 col-sm-5 col-md-3 col-lg-2">
            <img className="imgteam col-12" src={img4} alt="" />
            <h1 className="h1team h4">Ringo kai</h1>
            <p className="pteam">Partner</p>
          </div>
        </div>
      </div>
    </>
  );
}
