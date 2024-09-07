import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from './PostCard';

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
          <Post posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Posts;
