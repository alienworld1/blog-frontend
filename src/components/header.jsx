import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import Socials from './socials';
import UserContext from '../UserContext';
import { useContext } from 'react';

function Header() {
  const { user, isAuthenticated } = useContext(UserContext);

  return (
    <header className="flex justify-around p-3 text-slate-50 items-center border-b-2 border-violet-400">
      <Link to="/">
        <h1 className="text-3xl font-semibold">Blog</h1>
      </Link>
      <ul className="flex gap-8">
        <li className="hover:text-violet-300 cursor-pointer">
          <Dropdown linkText="Socials">
            <Socials />
          </Dropdown>
        </li>
        {isAuthenticated ? (
          <>
            <li>Welcome, {user.username}!</li>
            <Link
              to="/log-out"
              className="hover:text-violet-300 cursor-pointer"
            >
              <li>Log Out</li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/log-in">
              <li className="hover:text-violet-300 cursor-pointer">Log In</li>
            </Link>
            <Link to="/sign-up">
              <li className="hover:text-violet-300 cursor-pointer">Sign Up</li>
            </Link>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
