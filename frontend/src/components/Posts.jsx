import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
      setPosts(res.data.posts);
    } catch (e) {
      console.error(e.data || e.error || e.message);
    }
  };

  const handleEdit = (postSlug) => {
    navigate(`/update/${postSlug}`);
  };

  const handleDelete = async (postSlug) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${postSlug}`);
      // Refresh the posts list after deletion
      fetchPosts();
    } catch (e) {
      console.error(e.data || e.error || e.message);
    }
  };

  return (
    <>
      <div className="container h-full max-w-xl p-8 mx-auto my-24 border rounded-lg">
        <div className="flex items-center justify-between space-x-2">
          <h1 className="text-3xl font-extrabold text-primary">Posts</h1>
          <button
            onClick={() => navigate('/create')}
            className="px-2 py-1 font-bold text-white bg-blue-500 rounded hover:bg-green-700"
          >
            Create Post
          </button>
        </div>
        <div className="divider"></div>
        <div className="gap-2 p-4">
          {posts.length === 0 && (
            <div className="flex items-center justify-center space-x-2">
              <p className="text-lg font-bold">No posts found</p>
              <button
                onClick={() => navigate('/create')}
                className="px-2 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Create Post
              </button>
            </div>
          )}
          {posts.map((post) => (
            <div
              key={post._id}
              onDoubleClick={() => handleEdit(post.slug)}
              className="p-4 mb-4 transition-all ease-in-out border-b rounded-lg shadow-xl hover:scale-105 hover:z-10 hover:border-primary hover:border-b-2"
            >
              <div>
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p>{post.content}</p>
                <p className="text-sm text-gray-500">{post.user}</p>
              </div>
              <div className="flex mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(post.slug)}
                  className="px-2 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.slug)}
                  className="px-2 py-1 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
