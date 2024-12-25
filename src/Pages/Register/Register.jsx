import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function Register() {
  let Navigate = useNavigate();

  async function registersubmit(values) {
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((err) => {
        Swal.fire({
          text: `${err.response.data.message}`,
          icon: "error",
        });
      });

    if (data.message == "success") {
      Swal.fire({
        text: `Your account has been created successfully.`,
        icon: "success",
      });
      Navigate("/login");
    }
  }

  const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  let validateScheme = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimim is 3")
      .max(30, "Maximum is 30"),
    email: Yup.string()
      .required("Email is required")
      .matches(emailRegex, "Must be a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum is 6")
      .max(30, "Maximum is 30")
      .matches(
        passwordregex,
        "Password must Contains letters, numbers and special characters"
      ),
    rePassword: Yup.string()
      .required("Repassword is required")
      .min(6, "Minimum is 6")
      .max(30, "Maximum is 30")
      .oneOf([Yup.ref("password")], "Password and Repassword is not match"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(phoneRegex, "This phone not Egypt number")
      .min(11, "Minimum is 11")
      .max(11, "Maximum is 11"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: registersubmit,
    validationSchema: validateScheme,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>

      <div className="bigdivregister col-12">
        <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-6 registerform">
          <form
            className="col-12 formregisterstyle wow animate__animated animate__fadeInDownBig animate__slow"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label className="mb-1" htmlFor="name">
                Enter Name
              </label>
              <input
                className="form-control inputstyle"
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
            <div>
              <label className="mb-1" htmlFor="email">
                Enter Email
              </label>
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
            <div>
              <label className="mb-1" htmlFor="password">
                Enter Password
              </label>
              <input
                className="form-control inputstyle"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="errorsdiv col-8">
                  <h5 className="h6 showerror">{formik.errors.password}</h5>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="mb-1" htmlFor="rePassword">
                Enter RePassword
              </label>
              <input
                className="form-control inputstyle"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                name="rePassword"
                id="rePassword"
                placeholder="Enter RePassword"
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <div className="errorsdiv col-10 col-lg-8">
                  <h5 className="h6 showerror">{formik.errors.rePassword}</h5>
                </div>
              ) : (
                ""
              )}
            </div>
            <div>
              <label className="mb-1" htmlFor="phone">
                Enter Phone
              </label>
              <input
                className="form-control inputstyle"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Phone"
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div className="errorsdiv col-8">
                  <h5 className="h6 showerror">{formik.errors.phone}</h5>
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
              Register
            </button>
            <p className="text-center">
              Already have an account?{" "}
              <span
                onClick={() => {
                  Navigate("/login");
                }}
                className="spanloginandregisterstyle"
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
