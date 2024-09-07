import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Create from './components/Create.jsx';
import Login from './components/Login.jsx';
import PostPage from './components/PostPage.jsx';
import Posts from './components/Posts.jsx';
import Signup from './components/SIgnup.jsx';
import Update from './components/Update.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/create',
        element: <Create />,
      },
      {
        path: '/login', // Existing route
        element: <Login />,
      },
      {
        path: '/signup', // Add this route
        element: <Signup />,
      },
      {
        path: '/update/:slug',
        element: <Update />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
