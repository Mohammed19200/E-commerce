import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
import { Usercontext } from "../Context/UserToken";

export default function MainLayout() {
  const { setusertoken } = useContext(Usercontext);

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

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
