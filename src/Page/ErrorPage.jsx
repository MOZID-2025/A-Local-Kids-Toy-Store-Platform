import React from "react";
import Header from "../components/Header";
import Footer from "../Footer/Footer";
import { Navigate } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-gray-50 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-[100px] md:text-[150px] font-extrabold text-primary leading-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <button
            onClick={() => Navigate("/")}
            className="mt-8 bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ErrorPage;
