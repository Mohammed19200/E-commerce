import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./Contact.css";
import { Helmet } from "react-helmet";

export default function Contact() {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let validateScheme = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimim is 3")
      .max(30, "Maximum is 30"),
    email: Yup.string()
      .required("Email is required")
      .matches(emailRegex, "Must be a valid email"),
    subject: Yup.string()
      .required("Subject is required")
      .min(3, "Minimum is 3")
      .max(50, "Maximum is 50"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Minimum is 10")
      .max(200, "Maximum is 200"),
  });

  async function sendmessage(values, { resetForm }) {
    if (values) {
      toast.success("Your Message Send Successfully");
      resetForm();
    }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: sendmessage,
    validationSchema: validateScheme,
  });
  console.log(formik);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>

      <div>
        <div className="bigdivInfoContact wow animate__animated animate__fadeInDownBig animate__slow">
          <h1 className="col-10 m-auto col-lg-12 H1Infobig animate__animated animate__flipInX animate__infinite animate__slow">
            We're always eager to hear from you!
          </h1>
          <p className="col-10 m-auto col-lg-12 pInfobig">
            You can call us in working time or visit our office. All mails will
            get the response within 24 hours. Love to hear from you!
          </p>

          <div className="col-12 divInfoContact">
            <div className="col-10 col-sm-5 col-md-5 col-lg-3 divInfo">
              <h1 className="h1Contact">Contact</h1>
              <h6 className="h6Contact">
                <span className="spanContact">Mobile:</span> (+20) 1552537398
              </h6>
              <h6 className="h6Contact">
                <span className="spanContact">Mail:</span>{" "}
                midoelkassaby2@gmail.com
              </h6>
            </div>

            <div className="col-10 col-sm-5 col-md-5 col-lg-3 divInfo">
              <h1 className="h1Contact">HOUR OF OPERATION</h1>
              <h6 className="h6Contact">Monday – Friday : 09:00 – 20:00</h6>
              <h6 className="h6Contact">Sunday & Saturday: 10:30 – 22:00</h6>
            </div>

            <div className="col-10 col-sm-5 col-md-5 col-lg-3 divInfo">
              <h1 className="h1Contact">ADDRESS</h1>
              <h6 className="h6Contact">Mansoura , Egypt</h6>
            </div>
          </div>
        </div>

        <div className="col-11 col-md-10 col-lg-9 m-auto m-auto iframestyle wow animate__animated animate__fadeInLeftBig animate__slow">
          <iframe
            className="col-12 mapContact"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.093581122164!2d31.39756222471981!3d31.05149427443203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d9ec6016eb7%3A0x59eb949d0e20234b!2z2YXYrdin2YHYuNipINin2YTYr9mC2YfZhNmK2Kk!5e0!3m2!1sar!2seg!4v1726392271188!5m2!1sar!2seg"
            width="800"
            height="600"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="col-12 FormDisplaystyle wow animate__animated animate__fadeInUpBig animate__slow">
          <form
            className="col-12 formstyleContact"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="col-12 H1Infobig animate__animated animate__fadeOut animate__infinite animate__slow">
              Ask us anything here
            </h1>

            <div className="col-10 col-md-10 col-lg-7 m-auto">
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

            <div className="col-10 col-md-10 col-lg-7 m-auto">
              <label className="mb-1" htmlFor="email">
                Enter Email
              </label>
              <input
                className="form-control inputstyle"
                value={formik.values.email}
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

            <div className="col-10 col-md-10 col-lg-7 m-auto">
              <label className="mb-1" htmlFor="subject">
                Enter Subject
              </label>
              <input
                className="form-control inputstyle"
                value={formik.values.subject}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter Subject"
              />
              {formik.errors.subject && formik.touched.subject ? (
                <div className="errorsdiv col-8">
                  <h5 className="h6 showerror">{formik.errors.subject}</h5>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col-10 col-md-10 col-lg-7 m-auto">
              <label className="mb-1" htmlFor="message">
                Enter Message
              </label>
              <textarea
                onBlur={formik.handleBlur}
                value={formik.values.message}
                onChange={formik.handleChange}
                name="message"
                id="message"
                placeholder="Enter Message"
                className="inputstyle form-control"
              ></textarea>
              {formik.errors.message && formik.touched.message ? (
                <div className="errorsdiv col-10 col-lg-8">
                  <h5 className="h6 showerror">{formik.errors.message}</h5>
                </div>
              ) : (
                ""
              )}
            </div>

            <button
              disabled={!(formik.dirty && formik.isValid)}
              type="submit"
              className="btn btn-primary col-5 col-sm-3 col-md-2 m-auto"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
