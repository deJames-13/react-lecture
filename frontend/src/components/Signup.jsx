import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userData, setUserData] = useState({ username: '', password: '', email: '' });
  const nav = useNavigate();

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(import.meta.env.VITE_API_URL + '/users/signup', userData)
      .then((res) => {
        console.log(res.data);
        nav('/login'); // Redirect to login after signup
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <div className="container max-w-lg mx-auto my-24 border rounded-lg p-4">
      <h1 className="text-3xl font-extrabold">Signup</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
