import React, { useState } from 'react';
import { CiBoxList } from 'react-icons/ci';

const SelectionDropDown = ({ options, name, Isicon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropDown}
        type="button"
        className="hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        {Isicon && <CiBoxList className="mx-1" />}
        {name}
        <svg
          className={`w-2.5 h-2.5 ms-3 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="absolute  z-10 mt-1 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-slate-100"
        >
          <ul className="py-2 text-sm  ">
            {options.map((option, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-300 "
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectionDropDown;
