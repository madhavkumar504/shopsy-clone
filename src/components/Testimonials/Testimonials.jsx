import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates alias dignissimos molestiae amet nisi tempore facilis suscipit sapiente voluptatum nam natus, esse sit eveniet cumque quam quos, in perferendis nobis.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates alias dignissimos molestiae amet nisi tempore facilis suscipit sapiente voluptatum nam natus, esse sit eveniet cumque quam quos, in perferendis nobis.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates alias dignissimos molestiae amet nisi tempore facilis suscipit sapiente voluptatum nam natus, esse sit eveniet cumque quam quos, in perferendis nobis.",
    img: "https://picsum.photos/103/103",
  },
];
const Testimonials = () => {
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
    <div className="py-10">
      <div className="container">
        {/* Header section */}
        <div
          className="text-center mb-10
            max-w-[600px] mx-auto 
          "
        >
          <p data-dos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-dos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-dos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            alias dignissimos molestiae amet nisi tempore facilis suscipit
            sapiente voluptatum nam natus, esse sit eveniet cumque quam quos, in
            perferendis nobis.
          </p>
        </div>
        {/* Testimonials cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4
                rounded-xl dark:bg-gray-800 bg-primary/80
                 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20
                         h-20
                         "
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1
                        className="text-xl font-bold text-black/80
                  dark:text-white"
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="text-black/20 text-9xl font-serif
                        absolute top-0 right-0"
                  >
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
