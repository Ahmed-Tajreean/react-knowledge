import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 ml-4 mt-2 pt-4 bg-slate-400 rounded-lg'>
            <div>
                <h3 className='text-3xl'>Reading Time: {readingTime}</h3>
            </div>
            <h3 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;