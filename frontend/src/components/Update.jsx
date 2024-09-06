import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [values, setValues] = useState({
    title: '',
    content: '',
    user: '',
  });

  const { slug } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`)
      .then((res) => {
        setValues(res.data.post);
      })
      .catch((e) => {
        console.error(e.data || e.error || e.message);
      });
  }, [slug]);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${import.meta.env.VITE_API_URL}/posts/${slug}`, values)
      .then((res) => {
        console.log(res.data);
        nav('/');
      })
      .catch((e) => {
        console.error(e.data || e.error || e.message);
      });
  };

  return (
    <div className="container max-w-lg mx-auto my-24 border rounded-lg p-4">
      <h1 className="text-3xl font-extrabold">Update Post</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            name="content"
            value={values.content}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={values.user}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
