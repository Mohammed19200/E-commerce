import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
import { Usercontext } from "../Context/UserToken";
import { BallTriangle } from "react-loader-spinner"

export default function MainLayout() {
  const { setusertoken } = useContext(Usercontext);
  const [closeLoading, setcloseLoading] = useState(true);

  function saveToken() {
    if (localStorage.getItem("userToken")) {
      setusertoken(localStorage.getItem("userToken"));
    } else {
      <Navigate to={"/login"} />;
    }
  }

  useEffect(() => {
    saveToken();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setcloseLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {closeLoading ? (
        <div className="col-12">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="orange"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass="loadersstyle"
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}
