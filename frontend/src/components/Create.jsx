import axios from 'axios';
import { useState } from 'react';
const Create = () => {
  const [values, setValues] = useState({
    title: '',
    content: '',
    user: '',
  });

  const handleChange = (e) => {
    return setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(import.meta.env.VITE_API_URL + '/posts', values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.error(e.data || e.error || e.message);
      });
  };

  return (
    <div className="container max-w-lg mx-auto my-24 border rounded-lg p-4">
      <h1 className="text-3xl font-extrabold">Create Form</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="content"
            id="content"
            name="content"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="content">User:</label>
          <input
            type="user"
            id="user"
            name="user"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
