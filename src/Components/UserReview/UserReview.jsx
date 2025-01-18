import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import React from "react";
import Slider from "react-slick";
import { FaCommentAlt } from "react-icons/fa";
import "./Userreview.css";

export default function UserReview() {
  const [collect, setcollect] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("Comments"))) {
      setcollect(JSON.parse(localStorage.getItem("Comments")));
    } else {
      setcollect([]);
    }
  }, []);

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

  let validateScheme = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimim is 3")
      .max(30, "Maximum is 30"),
    comment: Yup.string()
      .required("Comment is required")
      .min(10, "Minimum is 10")
      .max(200, "Maximum is 200"),
  });

  async function sendmessage(values, { resetForm }) {
    if (values) {
      collect.push(values);
      localStorage.setItem("Comments", JSON.stringify(collect));
      console.log(collect);

      toast.success("Your Comment Send Successfully");
      resetForm();
    }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
    },
    onSubmit: sendmessage,
    validationSchema: validateScheme,
  });

  return (
    <div className="bigdivUserReview">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New Comment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="col-12 formstyleContact"
                onSubmit={formik.handleSubmit}
              >
                <div className="col-11 m-auto">
                  <label className="mb-1" htmlFor="name">
                    Enter Name
                  </label>
                  <input
                    className="form-control inputstyle"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="test"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="errorsdiv col-8">
                      <h5 className="h6 showerror">{formik.errors.name}</h5>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-11 m-auto">
                  <label className="mb-1" htmlFor="comment">
                    Enter Comment
                  </label>
                  <textarea
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    name="comment"
                    id="comment"
                    placeholder="Enter Comment"
                    className="inputstyle form-control"
                  ></textarea>
                  {formik.errors.comment && formik.touched.comment ? (
                    <div className="errorsdiv col-10 col-lg-8">
                      <h5 className="h6 showerror">{formik.errors.comment}</h5>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    disabled={!(formik.dirty && formik.isValid)}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Send Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <h1 className="h3 text-center col-10 col-md-9 m-auto">
        We love our clients
      </h1>
      <p className=" text-center col-10 col-md-9 m-auto">
        People love our products and 70% our customers are returned customers.
        We believe it!
      </p>

      <div className="col-12 divUserReview">
        <Slider
          className="col-10 col-md-9 m-auto slidercategories"
          {...settings}
        >
          <div className="col-12 divUserReview">
            <h1 className="h1iconAboutus">
              <FaCommentAlt style={{ color: "orange" }} />
            </h1>
            <h1 className="h1reviewAboutus m-auto col-12 col-sm-10 col-ms-9">
              Writing has never been my strong suit, but ChatGPT has changed the
              game for me. Whether it's crafting compelling emails, creative
              stories, or engaging social media posts.
            </h1>
            <h4 style={{ color: "orange" }} className="h4nameAboutus">
              Michael Chen
            </h4>
          </div>

          <div className="col-12 divUserReview">
            <h1 className="h1iconAboutus">
              <FaCommentAlt style={{ color: "orange" }} />
            </h1>
            <h1 className="h1reviewAboutus m-auto col-12 col-sm-10 col-ms-9">
              Being an avid language learner, I've always sought ways to
              practice and improve my skills. Minimalin has become my language
              learning companion.
            </h1>
            <h4 style={{ color: "orange" }} className="h4nameAboutus">
              Emily Smith
            </h4>
          </div>

          <div className="col-12 divUserReview">
            <h1 className="h1iconAboutus">
              <FaCommentAlt style={{ color: "orange" }} />
            </h1>
            <h1 className="h1reviewAboutus m-auto col-12 col-sm-10 col-ms-9">
              Discovering Minimalin has been a revelation for me. As a busy
              professional, I often find myself juggling multiple tasks and
              struggling to find the right words.
            </h1>
            <h4 style={{ color: "orange" }} className="h4nameAboutus">
              Alex Rodriguez
            </h4>
          </div>

          {collect.length != 0 ? (
            <div className="col-12 divUserReview">
              {collect.map((comments, index) => {
                return (
                  <div key={index} className="col-12 divUserReview">
                    <h1 className="h1iconAboutus">
                      <FaCommentAlt style={{ color: "orange" }} />
                    </h1>
                    <h1 className="h1reviewAboutus m-auto col-12 col-sm-10 col-ms-9">
                      {comments.comment}
                    </h1>
                    <h4 style={{ color: "orange" }} className="h4nameAboutus">
                      {comments.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </Slider>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Write Comment
      </button>
    </div>
  );
}
