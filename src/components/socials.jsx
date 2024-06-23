import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Socials() {
  return (
    <div className="bg-violet-400 text-violet-800 shadow-sm shadow-violet-800 rounded-md w-32">
      <ul className="p-4 flex flex-col gap-1 text-lg">
        <li>
          <a
            href="https://github.com/alienworld1"
            className="hover:text-violet-600"
          >
            <FaGithub className="inline" /> <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aditya-a-b-762453290/"
            className="hover:text-violet-600"
          >
            <FaLinkedin className="inline" /> <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
