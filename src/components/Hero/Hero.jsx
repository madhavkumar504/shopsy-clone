import React from "react";
import Women from "../../hero/women.png";
import Sale from "../../hero/sale.png";
import Shopping from "../../hero/shopping.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Women,
    title: "Upto 50% off on all Women's Wear",
    descrition:
      "lorem His Life will forever be changes color sit amet, consectetur adipscing elit, sed do eiusod tempor incidior ut abor  et magna alique",
  },
  {
    id: 2,
    img: Shopping,
    title: "Upto 30% off on all Men's Wear",
    descrition:
      "lorem His Life will forever be changes color sit amet, consectetur adipscing elit, sed do eiusod tempor incidior ut abor  et magna alique",
  },
  {
    id: 3,
    img: Sale,
    title: "Upto 20% off on all Sale's Wear",
    descrition:
      "lorem His Life will forever be changes color sit amet, consectetur adipscing elit, sed do eiusod tempor incidior ut abor  et magna alique",
  },
];
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000,
    cssEase: "ease-in-out",
    pushOnHover: false,
    pushOnFocus: true,
  };
  return (
    <>
      <div
        className="relative overflow-hidden min-h-[550px]
      sm:min-h-[650px] bg-gray-100 flex justify-center items-center
      dark:bg-gray-950 dark:text-white duration-200
      "
      >
        {/* background pattern */}
        <div
          className="h-[700px] w-[700px] bg-primary/40
          absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9
        "
        ></div>
        <div className="container pb-8 sm:pb-0">
          {/* hero section */}
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content center */}
                  <div
                    className="flex flex-col justify-center gap-4
              pt-12 sm:pt-0 text-center sm:text-left
              order-2 sm:order-1 relative z-10
              "
                  >
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl
              sm:text-6xl lg:text-7xl font-bold
              "
                    >
                      {data.title}
                    </h1>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-once="100"
                      className="text-sm"
                    >
                      {data.descrition}
                    </p>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-once="300"
                    >
                      <button
                        className="bg-gradient-to-r from-primary to-secondary
                hover:scale-105 duration-200 text-white py-2 px-4 rounded-full
                "
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* image section  */}
                  <div className="order-1 sm:order-2">
                    <div
                      className="relative z-10"
                      data-aos="zoom-in"
                      data-aos-once="true"
                    >
                      <img
                        className="w-[300px] h-[300px]
                  sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto
                  "
                        src={data.img}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* text content center */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
