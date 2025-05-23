import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-520px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
