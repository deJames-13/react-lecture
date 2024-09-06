import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { UserProvider } from './contexts/UserContext';

function App() {
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
