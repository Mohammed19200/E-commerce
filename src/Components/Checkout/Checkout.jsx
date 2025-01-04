import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import CartCheckout from "./CartCheckout";
import "./CartCheckout.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Checkout() {
  let headers = {
    token: localStorage.getItem("userToken"),
  };

  let cartId = localStorage.getItem("cartId");

  const [cartItem, setcartItem] = useState();

  let navigate = useNavigate();

  async function getcartdata() {
    await axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers,
      })
      .then((data) => {
        setcartItem(data?.data?.numOfCartItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getcartdata();
  }, []);

  async function createOrder(values) {
    if (cartItem != 0) {
      return await axios
        .post(
          `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
          {
            shippingAddress: {
              details: values.details,
              phone: values.phone,
              city: values.city,
            },
          },
          {
            headers,
          }
        )
        .then((data) => {
          console.log(data?.data);
          alert.success("Your order is being processed.");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("You Should Select Any Product From Your Shop");
      navigate("/shop");
    }
  }

  const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

  let validateScheme = Yup.object({
    details: Yup.string()
      .required("Details is required")
      .min(20, "Minimim is 20")
      .max(100, "Maximum is 100"),
    city: Yup.string()
      .required("City is required")
      .min(3, "Minimim is 3")
      .max(30, "Maximum is 30"),
    phone: Yup.string()
      .required("Phone is required , You Should Start (010,015,011,012)")
      .matches(
        phoneRegex,
        "This phone not Egypt number , You Should Start (010,015,011,012)"
      )
      .min(11, "Minimum is 11")
      .max(11, "Maximum is 11"),
  });

  let formik = useFormik({
    initialValues: {
      details: "",
      city: "",
      phone: "",
    },
    onSubmit: createOrder,
    validationSchema: validateScheme,
  });

  return (
    <div className="col-12 BigestDivCheckout m-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Checkout</title>
      </Helmet>

      <h1 className="h3 py-2 text-center col-12">
        Checkout
      </h1>

      <div className="col-11 col-sm-10 col-md-9 col-lg-6 registerform SeconddivCHeckout wow animate__animated animate__fadeInLeftBig animate__slow">
        <form
          className="col-12 formregisterstyle"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label className="mb-1" htmlFor="details">
              Enter Details
            </label>
            <input
              className="form-control inputstyle"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="details"
              id="details"
              placeholder="Address And Special Point"
            />
            {formik.errors.details && formik.touched.details ? (
              <div className="errorsdiv col-8">
                <h5 className="h6 showerror">{formik.errors.details}</h5>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <label className="mb-1" htmlFor="city">
              Enter City
            </label>
            <input
              className="form-control inputstyle"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              name="city"
              id="city"
              placeholder="City"
            />
            {formik.errors.city && formik.touched.city ? (
              <div className="errorsdiv col-8">
                <h5 className="h6 showerror">{formik.errors.city}</h5>
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
              placeholder="Phone"
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
            Confirm Order
          </button>
        </form>
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-6 FirstdivCHeckout">
        <CartCheckout />
      </div>
    </div>
  );
}
