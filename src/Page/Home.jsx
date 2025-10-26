import React, { use } from "react";
import Products from "../components/Products/Products";
import Featurs from "../components/Featurs";
import CallToAction from "../components/CallToAction";

const productsData = fetch("/Products.json").then((res) => res.json());

const Home = () => {
  const products = use(productsData);
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1280px] mx-auto p-10">
        <h2 className="text-center text-3xl font-bold">
          Top Trending Toys for Kids Fun, Creative & Educational!
        </h2>
        <p className="text-center mt-5 text-gray-700 ">
          Discover our handpicked collection of the most popular toys that spark
          imagination, creativity, <br /> and joy! From Lego building blocks to
          Play-Doh fun packs.
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Products key={product.toyId} product={product}></Products>
        ))}
      </div>

      <div>
        <Featurs />
      </div>
      <div>
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
