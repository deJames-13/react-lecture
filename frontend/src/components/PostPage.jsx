import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const [post, setPost] = useState({
    title: 'Title',
    content: 'Content',
    user: 'User',
  });

  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      axios
        .get(import.meta.env.VITE_API_URL + '/posts/' + slug)
        .then((res) => {
          setPost(res.data.post);
        })
        .catch((e) => {
          console.error(e.datafirst || e.error || e.message);
        });
    };

    return () => {
      fetchPost();
    };
  }, [slug]);

  return (
    <div className="container max-w-lg border mx-auto my-12 p-8 rounded-lg">
      <h1 className="text-3xl font-extrabold text-primary">{post.title}</h1>
      <p>{post.content}</p>
      <p className="text-sm text-gray-500">{post.user}</p>
    </div>
  );
};

export default PostPage;
