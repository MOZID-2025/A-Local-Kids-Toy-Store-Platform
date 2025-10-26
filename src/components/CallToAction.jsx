import React from "react";
import toy from "../assets/toy.jpg";
import { Link } from "react-router";

const CallToAction = () => {
  return (
    <section
      className="relative w-full h-[50vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${toy})`, // full-width background
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Centered content container (max 1280px) */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-20 text-center md:text-left">
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-700 mb-3">
            Trendy Clothing
          </p>

          <h1 className="mb-8 text-4xl md:text-5xl font-extrabold text-gray-700 drop-shadow-lg leading-tight">
            Get ready for a stylish <br /> autumn at our shop
          </h1>

          <Link
            to="/products"
            className="mt-10 bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
