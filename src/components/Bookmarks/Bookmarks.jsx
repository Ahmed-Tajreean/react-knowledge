import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks }) => {
    const { title } = bookmarks;
    return (
        <div className='md:w-1/3 ml-4 mt-2 pt-4'>
            <h3 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;