import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link key={post._id} to={`/post/${post.slug}`}>
          <div className="shadow-xl rounded-lg border-b p-4 hover:scale-105 hover:z-10 hover:border-primary hover:border-b-2 transition-all ease-in-out">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">{post.user}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

Post.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Post;
