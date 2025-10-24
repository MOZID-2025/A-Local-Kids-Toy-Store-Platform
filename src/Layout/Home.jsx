import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div>
        <Slider />
      </div>
      <main>
        <Outlet />
        
      </main>
    </div>
  );
};

export default Home;
