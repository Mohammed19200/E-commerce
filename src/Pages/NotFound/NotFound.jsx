import React, { useEffect } from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  let navigate = useNavigate();

  return (
    <div className="col-12 bigestdivnotfound wow animate__animated animate__fadeInDownBig animate__slow">
      <div className="bigdivnotfound"></div>

      <div className="col-12 divbuttonnotfound">
        <h1 className="h6 h1titlenotfound col-11 col-md-8 col-lg-7 col-xl-5">
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </h1>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="buttonnotfound"
        >
          Go To Home
        </button>
      </div>
    </div>
  );
}
