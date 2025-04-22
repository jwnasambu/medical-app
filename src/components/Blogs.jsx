import Rect from 'react';
import BlogCard from '../layouts/BlogCard';
import Button from '../layouts/Button';
import BlogCard from '../layouts/BlogCard';
import blog from '../assets/blog.jpg';
import blog from '../assets/blog.jpg';
import blog from '../assets/blog.jpg';
import blog from '../assets/blog.jpg';
import blog from '../assets/blog.jpg';
import blog from '../assets/blog.jpg';


const Blogs = () => {
    return (
        <div className="min-h=screen flex flex-col justify-center lg:px-32 px-5 pt-24">
            <div className=' flex flex-col items-center lg:flex-row justify-between'>
                <div>
                    <h1 className="text-4xl font-semibold text-center lg:text-start">Latest Post</h1>
                    <p className="mt-2 text-center lg:text-start">
                        Wellness brings care to your screen with real-time video consultations, remote monitoring,
                        and follow-up appointments—all from the comfort of your home.
                </p>
                </div>
                <div className="mt-4 lg:mt-0">
                    <Button title="Our Articles" />
                </div>
            </div>
            <div className="my-8">
                <div className="flex flex-wrap justify-center gap-5">
                    <BlogCard img={blog} headlines="Unraveling the Mysteries of diet" />
                    <BlogCard img={blog} headlines="Unraveling the Mysteries of water" />
                    <BlogCard img={blog} headlines="Unraveling the Mysteries of sunshine" />
                    <BlogCard img={blog} headlines="Unraveling the Mysteries of temperance" />
                    <BlogCard img={blog} headlines="Unraveling the Mysteries of excerise" />
                    <BlogCard img={blog} headlines="Unraveling the Mysteries of sleep" />
                  </div>
                </div>
        </div>
    )
}

export default Blogs;
