import React from 'react';
import Button from '../layouts/Button';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[url('assets/img/home.png')] px-5 lg:px-32 text-white">
      <div className="bg-green-100 bg-opacity-60 p-8 rounded-xl w-full lg:w-4/5 space-y-6 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life — Your Trusted Partner
        </h1>
        <p className="text-lg max-w-3xl">
          At the heart of everything we do is a commitment to helping you make informed decisions that lead to a healthier,
          more fulfilling life. Whether you're exploring preventative care, managing chronic conditions,
          or simply striving for everyday well-being, we're here to support you every step of the way—with compassion,
          integrity, and expert guidance.
        </p>
        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
