import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Products = ({ product }) => {
  // console.log(product);
  const { toyName, price, rating, subCategory, pictureURL, toyId } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4 border overflow-hidden hover:scale-110 transition ease-in-out">
      <figure>
        <img className="w-full h-50" src={pictureURL} alt="" />
      </figure>
      <div className="card-body bg-gray-50">
        <h2 className="card-title mb-10">
          {toyName}
          <div className="badge badge-secondary">$ {price}</div>
        </h2>

        <div className="card-actions justify-between mb-5">
          <div className="flex items-center font-bold text-primary">
            <p className="mr-2">
              <FaStar />
            </p>
            <h1>{rating}</h1>
          </div>
          <div className="badge badge-outline">{subCategory}</div>
        </div>
        <Link className="btn btn-primary" to={`/product/${toyId}`}>
          View More
        </Link>
      </div>
    </div>
  );
};

export default Products;
