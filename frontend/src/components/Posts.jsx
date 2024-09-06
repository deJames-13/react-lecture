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
      <div className="container max-w-xl border rounded-lg h-full mx-auto my-24 p-8">
      <div className="flex space-x-2 items-center justify-between">
        <h1 className="text-3xl font-extrabold text-primary">Posts</h1>
        <button
          onClick={() => navigate('/create')}
          className="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
        >
          Create Post
        </button>
      </div>
        <div className="divider"></div>
        <div className="p-4 gap-2">
          {
            posts.length === 0 && (
              <div className="flex space-x-2 items-center justify-center">
                <p className="text-lg font-bold">No posts found</p>
                <button
                  onClick={() => navigate('/create')}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  Create Post
                </button>
              </div>
            )
          }
          {posts.map((post) => (
            <div
              key={post._id}
              onDoubleClick={() => handleEdit(post.slug)} 
              className="shadow-xl rounded-lg border-b p-4 hover:scale-105 hover:z-10 hover:border-primary hover:border-b-2 transition-all ease-in-out mb-4"
            >
              <div>
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p>{post.content}</p>
                <p className="text-sm text-gray-500">{post.user}</p>
              </div>
              <div className="mt-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(post.slug)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.slug)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
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
