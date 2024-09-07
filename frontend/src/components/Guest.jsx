import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Nav from './Nav';

function Guest() {
  const { user } = useUser();
  const nav = useNavigate();

  useEffect(() => {
    if (user) {
      return nav('/');
    }
  }, [user, nav]);

  return (
    <div className="w-screen h-screen">
      <Nav title="Guest" />
      <Outlet />
    </div>
  );
}

export default Guest;
