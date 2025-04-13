import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
            <div className="w-full lg:w-4/5 space-y-5 mt-10">
                <h1 className="text-5xl font-bold leading-tight">Empowering Health Choices for a vibrant Life Your Truested..</h1>
                <p>
                    At the heart of everything we do is a commitment to helping you make informed decisions that lead to a healthier,
                    more fulfilling life. Whether you're exploring preventative care, managing chronic conditions,
                    or simply striving for everyday well-being, we're here to support you every step of the way—with compassion,
                    integrity, and expert guidance.
                </p>
                <Btton title="See Services"/>
            </div>
        </div>
    );
};

export default Home;
