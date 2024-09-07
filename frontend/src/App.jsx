import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import { UserProvider } from './contexts/UserContext';
import useUser from './hooks/useUser';

function App() {
  const { user } = useUser();
  const nav = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log('user', user);
      return nav('/login');
    }
  }, [user, nav]);

  return (
    <UserProvider>
      <div className="w-screen h-screen">
        <Nav title="React App" />
        <Outlet />
      </div>
    </UserProvider>
  );
}

export default App;
