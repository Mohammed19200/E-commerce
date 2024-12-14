import { useNavigate } from "react-router-dom";
import TimerImg from "../../../assets/1288-removebg-preview.png";
import Timer from "../Timer";
import "./TimerOffer.css";

export default function TimerOffer() {
  let navigate = useNavigate();

  return (
    <div className="col-12 fulldivtimer">
      <div className="bigestdivtimer col-12">
        <div className="col-11 col-md-6 descriptiontimer">
          <h1>Up To 25% Discount</h1>
          <h1>Check it Out</h1>

          <div className="col-12">
            <Timer />
          </div>

          <button
            onClick={() => {
              navigate("/shop");
            }}
            className="btn btn-primary col-5 col-sm-3 col-md-5 col-lg-3"
          >
            Shop Now
          </button>
        </div>

        <div className="col-10 col-md-4 animate__animated animate__bounce animate__infinite animate__slower">
          <img src={TimerImg} className="w-100 imgstyletimer" />
        </div>
      </div>
    </div>
  );
}
