import PropTypes from 'prop-types';
import { PiBookmarkSimple } from "react-icons/pi";

const Blog = ({ blog, handleBookmarks }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-20'>

            <img className='w-full mb-8' src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=''>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='ml-2 text-grey'><PiBookmarkSimple /></button>
                </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='mr-4' href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func
}

export default Blog;