import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div>

            <img src={cover} alt="" />
            <img src={author_img} alt="" />
            <p>{author}</p>
            <p>{posted_date}</p>
            <p>{reading_time}</p>
            <h3>{title}</h3>
            <p>{hashtags}</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;