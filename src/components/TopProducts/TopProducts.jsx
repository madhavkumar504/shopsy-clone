import React from "react";
import shirt from "../../shirt/shirt.png";
import shirt2 from "../../shirt/shirt2.png";
import shirt3 from "../../shirt/shirt3.png";
import Women3 from "../../women/women3.jpg";
import Women4 from "../../women/women4.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: shirt,
    title: "Casual Wear",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Volu",
  },
  {
    id: 2,
    img: shirt2,
    title: "Printed shirt",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Volu",
  },
  {
    id: 3,
    img: shirt3,
    title: "Women Shirt",
    rating: 4.7,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Volu",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-24">
          <p data-dos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-dos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-dos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            alias dignissimos molestiae amet nisi tempore facilis suscipit
            sapiente voluptatum nam natus, esse sit eveniet cumque quam quos, in
            perferendis nobis.
          </p>
        </div>
        {/* Body Section */}

        <div
          className=" grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-20  md:gap-5 place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              className="rounded-2xl bg-white
                dark:bg-gray-800 hover:bg-black/80
                dark:hover:bg-primary hover:text-white
                relative shadow-xl
                duration-300 group max-w-[300px]
              "
            >
              {/* image section */}
              <div className="h-[400px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20
                  group-hover:scale-105 duration-300 drop-shadow-md
                        "
                />
                {/* details section */}
                <div
                  className="p-4
                  text-center"
                >
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <h1 className="font-semibold">{data.title}</h1>
                  <p
                    className="text-gray-500 group-hover:text-white 
                    duration-300 text-sm line-clamp-2
                    "
                  >
                    {data.description}
                  </p>
                  <button
                    className="bg-primary 
                    hover:scale-105 duration-300 text-white
                    py-1 px-4 rounded-full mt-4 group-hover:bg-white
                    group-hover:text-primary 
                    "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
