import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';

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
    <div className="container max-w-lg mx-auto my-24 border rounded-lg p-4">
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
