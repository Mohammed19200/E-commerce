import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Usercontext } from "../../Context/UserToken";
import Wow from "wowjs";
import { toast } from "react-toastify";

export default function Login() {
  useEffect(() => {
    new Wow.WOW().init();
  }, []);

  let Navigate = useNavigate();
  let { setusertoken } = useContext(Usercontext);

  async function loginsubmit(values) {
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {
        alert(err.response.data.message);
      });

    if (data.message == "success") {
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", data.user.name);
      setusertoken(data.token);
      Navigate("/");
      toast.success(
        `Welcome to our website, ${localStorage.getItem("userInfo")}.`
      );
    }
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  let validateScheme = Yup.object({
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
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginsubmit,
    validationSchema: validateScheme,
  });

  return (
    <>
      <div className="bigdivlogin col-12">
        <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-6 loginform">
          <form
            className="col-12 formloginstyle wow animate__animated animate__fadeInDownBig animate__slow"
            onSubmit={formik.handleSubmit}
          >
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

            <button
              disabled={!(formik.dirty && formik.isValid)}
              type="submit"
              className="btn btn-primary col-7 col-md-4 m-auto"
            >
              Login
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <span
                onClick={() => {
                  Navigate("/register");
                }}
                className="spanloginandregisterstyle"
              >
                Signup
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
