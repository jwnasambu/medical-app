import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      <main>
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Doctors Section */}
        <section id="doctors">
          <Doctors />
        </section>

        {/* Blog Section */}
        <section id="blog">
          <Blogs />
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
