import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from '../contexts/UserContext';

const Nav = ({ title }) => {
  const { user, logout } = useUser();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">{title}</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {!user ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Nav;
