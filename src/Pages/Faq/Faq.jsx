import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import "./Faq.css";
import { Helmet } from "react-helmet";

export default function Faq() {
  let navigate = useNavigate();

  return (
    <>
    
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQ</title>
      </Helmet>

      <div className="thebigestdivFaq wow animate__animated animate__fadeInLeftBig animate__slow">
        <h1 className="col-11 m-auto text-center h4 mb-4 animate__animated animate__flipInX animate__infinite animate__slow">
          {" "}
          Frequently Asked Questions
        </h1>

        <div className="FAQbigdiv col-11 m-auto">
          <div className="bigseconddivFAQ col-12">
            <div className="secondbigdivFAQ col-12">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                How to buy a product?
              </button>

              <div className="col-12">
                <div className="collapse" id="collapseExample1">
                  <div className="card card-body CaardStyle">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bigseconddivFAQ col-12">
            <div className="secondbigdivFAQ">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                How can i make refund from your website?
              </button>

              <div className="col-12">
                <div className="collapse" id="collapseExample2">
                  <div className="card card-body CaardStyle">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bigseconddivFAQ col-12">
            <div className="secondbigdivFAQ">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                I am a new user. How should I start?
              </button>

              <div className="col-12">
                <div className="collapse" id="collapseExample3">
                  <div className="card card-body CaardStyle">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bigseconddivFAQ col-12">
            <div className="secondbigdivFAQ">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample4"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Returns and refunds
              </button>

              <div className="col-12">
                <div className="collapse" id="collapseExample4">
                  <div className="card card-body CaardStyle">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bigseconddivFAQ col-12">
            <div className="secondbigdivFAQ">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample5"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Are my details secured?
              </button>

              <div className="col-12">
                <div className="collapse" id="collapseExample5">
                  <div className="card card-body CaardStyle">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bigseconddivFAQ col-12">
            <div className="secondbigdivFAQ">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample6"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Sale code is not working
              </button>

              <div className="col-12">
                <div className="collapse" id="collapseExample6">
                  <div className="card card-body CaardStyle">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-12">
            <div className="secondbigdivFAQ">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample7"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                How do I make payment by my credit card?
              </button>

              <div className="col-12">
                <div className="collapse" id="collapseExample7">
                  <div className="card card-body CaardStyle">
                    Some placeholder content for the collapse component. This
                    panel is hidden by default but revealed when the user
                    activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CContactusdiv">
          <h1 className="h1CContact text-center col-10">
            Contact with our support team to get further help.
          </h1>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="btn btn-primary col-7 col-sm-5 col-md-4 col-lg-2 buttonCContact"
          >
            Contact Us
          </button>
          <h1
            onClick={() => {
              navigate("/contact");
            }}
            className="h4 h4CContact"
          >
            <IoCall /> +201552537398
          </h1>
        </div>
      </div>
    </>
  );
}
