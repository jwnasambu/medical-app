import React from 'react';
import aboutUs from "../assets/aboutUs.jpg";

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 lg:pt-16 gap-5'>
      <div className='w-full lg:w-3/4 space-y-4'>
        <h1 className='text-4xl font-semibold text-center lg:text-start'>About Us</h1>
        <p className='text-justify lg:text-start'>
          At Wellbeing, your health and well-being are our top priorities.
          We are committed to providing compassionate, high-quality care through our team of skilled professionals,
          modern equipment, and patient-centered services. Whether you need routine check-ups, urgent care, or
          specialized treatment, we’re here for you — every step of the way. Your journey to better health starts with us.
        </p>
        <p className='text-justify lg:text-start'>
          📍 Visit us at: <strong>Kitale town</strong><br />
          📞 Call us at: <strong>+254 706 087 349</strong><br />
          🌐 Learn more at: <strong>[Your Website]</strong><br />
          <span>Your health. Our mission. 💚</span>
        </p>
      </div>
      <div>
        <img src={aboutUs} alt="About Wellbeing Health Facility" className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default About;
