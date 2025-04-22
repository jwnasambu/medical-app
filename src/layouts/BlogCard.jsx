import React from 'react';

const BlogCard = ({img, headlines}) => {
    return (
        <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
            <img className=" h-64 md:h-96 lg:h-40 w-full rounded-lg"  src={img} alt="img" />
            <h1 className="text-lg text-center font-semibold">{headlines}</h1>
            <p className="text-center text-sm">Designed with patient comfort and rapid response in mind, the facility is equipped with the latest medical technology and staffed by top-tier emergency specialists ready to provide lifesaving care around the clock</p>
        </div>
    )
}

export default BlogCard;