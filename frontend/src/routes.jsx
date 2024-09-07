import { createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Create from './components/Create.jsx';
import Guest from './components/Guest.jsx';
import Login from './components/Login.jsx';
import Posts from './components/Posts.jsx';
import Signup from './components/Signup.jsx';
import Update from './components/Update.jsx';

export const router = createBrowserRouter([
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
        path: '/update/:slug',
        element: <Update />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/',
    element: <Guest />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
]);
