import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Modal.css";

export default function Modal() {
  const [close, setclose] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setclose(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  function SendEmail(values) {
    localStorage.setItem("EmailOffer", JSON.stringify(values));
    toast.success("Your Email Send Successfully");
    setclose(false);
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let validateScheme = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .matches(emailRegex, "Must be a valid email"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: SendEmail,
    validationSchema: validateScheme,
  });

  return (
    <>
      {close ? (
        <div
          className="col-12 bigestdivemail"
          onClick={() => {
            setclose(false);
          }}
        >
          <form
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="col-11 col-lg-8 col-xl-7 col-xxl-6 emailcontentdiv wow animate__animated animate__backInDown animate__slow"
            onSubmit={formik.handleSubmit}
          >
            <FaWindowClose
              onClick={() => {
                setclose(false);
              }}
              className="iconmodal"
            />

            <h1 className="h3 h1modal">SIGN UP & GET 10% OFF</h1>

            <div className="col-12 col-md-10">
              <input
                className="form-control inputstyle"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="errorsdiv col-8">
                  <h5 className="h6 showerror">{formik.errors.email}</h5>
                </div>
              ) : (
                ""
              )}
            </div>

            <button
              disabled={!(formik.dirty && formik.isValid)}
              type="submit"
              className="btn btn-primary col-7 col-md-4 m-auto"
            >
              Send Email
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
