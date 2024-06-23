import { useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({ linkText, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <span onClick={toggleDropdown}>{linkText}</span>
      <div
        className={`
          absolute left-0 mt-5 py-2 z-20 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 max-h-56' : 'opacity-0 max-h-0'
          }`}
      >
        {children}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  linkText: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Dropdown;
