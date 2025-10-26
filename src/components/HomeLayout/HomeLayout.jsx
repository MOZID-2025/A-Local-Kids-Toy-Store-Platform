import React, { Suspense } from "react";
import Header from "../Header";
import Slider from "../Slider/Slider";
import { Outlet, useNavigation } from "react-router";
import Products from "../Products/Products";
import Footer from "../../Footer/Footer";
import Loading from "../../Page/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Header />
      <main>
        <div>
          <Slider />
        </div>
        <div>{state == "loading" ? <Loading /> : <Outlet />}</div>

        <div className="">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
