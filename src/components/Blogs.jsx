import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";

// Blog images
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const blogPosts = [
  { img: img1, headline: "Unraveling the Mysteries of Sleep" },
  { img: img2, headline: "The Heart-Healthy Diet" },
  { img: img3, headline: "Understanding Pediatric Vaccinations" },
  { img: img4, headline: "Navigating Mental Health" },
  { img: img5, headline: "The Importance of Regular Exercise" },
  { img: img6, headline: "Skin Health 101" },
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-24 lg:px-32">
      {/* Header section */}
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, quidem.
          </p>
        </div>

        <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>

      {/* Blog cards section */}
      <div className="my-8">
        <div className="flex flex-wrap justify-center gap-5">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} img={post.img} headlines={post.headline} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
