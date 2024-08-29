import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="w-screen h-screen">
      <Nav title="React App" />
      <Outlet />
    </div>
  );
}

export default App;
