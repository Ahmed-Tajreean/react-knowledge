import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

// const Blogs = () => {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         fetch('blogs.json')
//             .then(res => res.json())
//             .then(data => setBlogs(data))
//     }, [])

//     return (
//         <div className="md:w-2/3">
//             {/* <div className="text-4xl">Blogs: {blogs.length}</div> */}
//         </div>
//     );
// };

// export default Blogs;



const Blogs = () => {
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
                blogs.map(blog => <Blog blog={blog} key={blog.id}>

                </Blog>)
            }
        </div>
    );
};

export default Blogs;