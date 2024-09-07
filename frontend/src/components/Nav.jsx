import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';
const Nav = ({ title }) => {
  const { user, logout } = useUser();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/">{title}</Link>
      </div>
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
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
