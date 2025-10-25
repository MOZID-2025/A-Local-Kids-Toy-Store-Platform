import React, { Suspense } from "react";
import Header from "../Header";
import Slider from "../Slider/Slider";
import { Outlet } from "react-router";
import Products from "../Products/Products";
import Footer from "../../Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col min-h-screen">
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <div>
            <Slider />
          </div>
          <Outlet />
        </Suspense>

        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
