import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import Socials from './socials';

function Header() {
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
        <li className="hover:text-violet-300 cursor-pointer">Log In</li>
        <li className="hover:text-violet-300 cursor-pointer">Sign Up</li>
      </ul>
    </header>
  );
}

export default Header;
