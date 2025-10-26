import React from "react";
import { GiClothes } from "react-icons/gi";
import { TbHorseToy, TbTruckDelivery } from "react-icons/tb";

const Featurs = () => {
  return (
    <div className="bg-amber-50 mt-10 pt-15 pb-15">
      <div className="text-center">
        <h2 className="text-3xl font-bold underline mb-3">Services</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          fuga soluta in ad minus quos assumenda neque unde officia aliquam.
        </p>
      </div>
      <section className="max-w-[1280px] mx-auto mt-10 flex justify-between gap-10">
        <div className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center text-center">
          <TbTruckDelivery className="text-8xl mb-4 text-gray-800" />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Fast Delivery
          </h1>
          <p className="text-gray-600">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <GiClothes className="text-8xl mb-4 text-gray-800" />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Kids Clothing
          </h1>
          <p className="text-gray-600">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <TbHorseToy className="text-8xl mb-4 text-gray-800" />
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Toy & Accessories
          </h1>
          <p className="text-gray-600">
            Natus error sit voluptatem accusantium doloremque laudantium, totam
            rem.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Featurs;
