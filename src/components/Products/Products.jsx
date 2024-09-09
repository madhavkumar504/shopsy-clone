import React from "react";
import Women from "../../hero/women.png";
import Sale from "../../hero/sale.png";
import Shopping from "../../hero/shopping.png";
import Women2 from "../../women/women2.jpg";
import Women3 from "../../women/women3.jpg";
import Women4 from "../../women/women4.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Women,
    title: "Woman Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Women2,
    title: "Woman Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Shopping,
    title: "Googgles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Women3,
    title: "Printed T-shirt",
    rating: 4.4,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Women4,
    title: "Woman Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
];
const Products = () => {
  return (
    <>
      <div
        className="mt-14 mb-12
      "
      >
        <div className="container">
          {/* Header section */}
          <div
            className="text-center mb-10
            max-w-[600px] mx-auto
          "
          >
            <p data-dos="fade-up" className="text-sm text-primary">
              Top Selling Products for you
            </p>
            <h1 data-dos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
            <p data-dos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates alias dignissimos molestiae amet nisi tempore facilis
              suscipit sapiente voluptatum nam natus, esse sit eveniet cumque
              quam quos, in perferendis nobis.
            </p>
          </div>
          {/* Body Section */}
          <div className="">
            <div
              className="grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5
            "
            >
              {/* Card Section */}
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px]
                w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      {data.rating}
                    </div>
                  </div>
                </div>
              ))}
              {/* view all button */}
              <div className="flex justify-center ">
                <button
                  className="text-center mt-10
                cursor-pointer bg-primary text-white py-1 px-4
                rounded-full
                "
                >
                  View All Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
