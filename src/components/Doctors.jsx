import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const doctorData = [
  {
    img: "/src/assets/img/doc1.jpg",
    name: "Dr. Serena Mitchell",
    specialties: "Orthopedic Surgeon",
  },
  {
    img: "/src/assets/img/doc2.jpg",
    name: "Dr. Julian Bennett",
    specialties: "Cardiologist",
  },
  {
    img: "/src/assets/img/doc3.jpg",
    name: "Dr. Camila Rodriguez",
    specialties: "Pediatrician",
  },
  {
    img: "/src/assets/img/doc4.jpg",
    name: "Dr. Victor Nguyen",
    specialties: "Neurologist",
  },
  {
    img: "/src/assets/img/doc5.jpg",
    name: "Dr. Ethan Carter",
    specialties: "Dermatologist",
  },
  {
    img: "/src/assets/img/doc6.jpg",
    name: "Dr. Olivia Martinez",
    specialties: "Ophthalmologist",
  },
];

const Doctors = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-16 lg:px-32">
      {/* Header */}
      <div className="flex flex-col items-center justify-between mb-10 lg:flex-row lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.
          </p>
        </div>

        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-5">
        <Slider ref={sliderRef} {...sliderSettings}>
          {doctorData.map((doctor, index) => (
            <div
              key={index}
              className="h-[350px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer mb-2 text-black"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-full h-56 rounded-t-xl object-cover"
              />

              <div className="flex flex-col items-center justify-center p-4">
                <h1 className="text-xl font-semibold">{doctor.name}</h1>
                <h3 className="pt-2">{doctor.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
