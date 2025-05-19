import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Root = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
