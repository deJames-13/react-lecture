import axios from 'axios';
import { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      axios
        .get(import.meta.env.VITE_API_URL + '/posts')
        .then((res) => {
          setPosts(res.data.posts);
        })
        .catch((e) => {
          console.error(e.datafirst || e.error || e.message);
        });
    };

    return () => {
      fetchPosts();
    };
  }, []);
  return (
    <>
      <div className="container max-w-xl border rounded-lg h-full mx-auto my-24 p-8">
        <h1 className="text-3xl font-extrabold text-primary">Posts</h1>
        <div className="divider"></div>
        <div className="p-4 gap-2">
          {posts.map((post) => (
            <div
              key={post._id}
              className="shadow-xl rounded-lg border-b p-4 hover:scale-105 hover:z-10 hover:border-primary hover:border-b-2 transition-all ease-in-out"
            >
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p>{post.content}</p>
              <p className="text-sm text-gray-500">{post.user}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
