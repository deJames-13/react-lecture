import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const nav = useNavigate();
  const { login } = useUser();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(credentials.email, credentials.password);
      nav('/');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred during login');
    }
  };

  return (
    <div className="container max-w-lg p-4 mx-auto my-24 border rounded-lg">
      <h1 className="text-3xl font-extrabold">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="w-full input input-bordered"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
