import { useNavigate } from "react-router-dom";
import "./TermsConditions.css";
import Wow from "wowjs";
import { useEffect } from "react";

export default function TermsConditions() {
  let navigate = useNavigate();

  useEffect(() => {
    new Wow.WOW().init();
  }, []);

  return (
    <div className="col-12 bigdivTermsConditions">
      <h1 className="col-11 m-auto h2 text-center animate__animated animate__flipInX animate__infinite animate__slow">Terms & Conditions</h1>

      <div className="divterms col-11 m-auto  wow animate__animated animate__fadeInDownBig animate__slow">
        <h1 className="h4 h1Terms">Termination</h1>
        <h6 className="h6terms">
          1- There are many variations of passages of Lorem Ipsum available
        </h6>
        <h6 className="h6terms">2- If you are going to use a passage</h6>
        <h6 className="h6terms">
          3- All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary
        </h6>
        <h6 className="h6terms">
          4- It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures
        </h6>
        <h6 className="h6terms">
          5- The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters
        </h6>
        <h6 className="h6terms">
          6- Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text
        </h6>
      </div>

      <div className="divterms col-11 m-auto wow animate__animated animate__fadeInLeftBig animate__slow">
        <h1 className="h4 h1Terms">Changes To This Agreement</h1>
        <h6 className="h6terms">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms and Conditions by posting the updated terms on the Site.
          Your continued use of the Site after any such changes constitutes your
          acceptance of the new Terms and Conditions.
        </h6>
      </div>

      <div className="divterms col-11 m-auto wow animate__animated animate__fadeInUpBig animate__slow">
        <h1 className="h4 h1Terms">Contact us</h1>
        <h6 className="h6terms">
          If you have any questions about this Agreement, please contact us
          filling this{" "}
          <span
            onClick={() => {
              navigate("/contact");
            }}
            className="spanterms"
          >
            contact form.
          </span>
        </h6>
      </div>
    </div>
  );
}
