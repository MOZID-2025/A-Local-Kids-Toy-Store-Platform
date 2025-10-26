import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "../Header";
import Footer from "../../Footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const product = products.find((p) => String(p.toyId) === id);

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  const {
    toyName,
    price,
    rating,
    description,
    sellerName,
    sellerEmail,
    pictureURL,
  } = product;

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <div className="bg-gray-50 flex gap-6 max-w-[1280px] mx-auto bg-white p-10 mt-10 mb-10 rounded-xl shadow-lg">
        <div>
          <img className="w-80 h-60" src={pictureURL} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{toyName}</h1>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="font-bold">Seller: {sellerName}</p>
          <p className=" font-bold">Email: {sellerEmail}</p>
          <div className="mt-6">
            <p className="text-gray-700 mb-2 font-bold">Price: ${price}</p>
            <p className="text-gray-700 mb-2">Rating: ⭐ {rating}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
