import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookmarks, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime} blog={blog} key={blog.id}>

                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;