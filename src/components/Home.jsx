import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div
      className="
        min-h-screen 
        flex flex-col 
        justify-center 
        bg-[url('assets/img/home.png')] 
        bg-no-repeat bg-cover 
        opacity-90 
        text-white 
        px-5 lg:px-32
      "
    >
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life — Your Trusted Partner.
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quam magnam omnis natus accusantium quos. Reprehenderit 
          incidunt expedita molestiae impedit at sequi dolorem iste 
          sit culpa, optio voluptates fugiat vero consequatur?
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
