import React from "react";

const BlogCard = ({ img, headlines }) => {
  return (
    <div className="w-full lg:w-1/4 p-2 rounded-lg shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 space-y-2">
      <img
        src={img}
        alt="Blog thumbnail"
        className="w-full h-64 md:h-96 lg:h-40 rounded-lg object-cover"
      />
      <h2 className="text-lg font-semibold text-center">{headlines}</h2>
      <p className="text-sm text-center text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        repellendus suscipit. Rerum consequatur magni expedita.
      </p>
    </div>
  );
};

export default BlogCard;
