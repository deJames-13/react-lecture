import { Link } from 'react-router-dom';

const Nav = ({ title }) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">{title}</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
