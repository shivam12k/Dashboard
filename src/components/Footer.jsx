import React, { useState } from "react";
import { MdOutlineUnarchive } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="sticky bottom-0  h-[3em]  py-4 overflow-hidden">
      <div className="flex justify-center space-x-4">
        <button
          type="button"
          className="text-gray-900 h-[2em] bg-gray-100 hover:bg-gray-200 focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
          Selected
        </button>

        <button
          type="button"
          className="text-gray-900 h-[2em] bg-gray-100 hover:bg-gray-200 focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
          <MdOutlineUnarchive className="mx-1" />Archive
        </button>

        <button
          type="button"
          className="text-red-700 h-[2em] bg-gray-100 hover:bg-red-200 focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
        <MdDeleteOutline className="mx-1" />
          Delete
        </button>

        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="text-gray-900 h-[2em] bg-gray-100 hover:bg-gray-200 focus:ring-0 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          type="button"
        >
          more
          <svg
            className={`w-2 h-2 ms-2 ${isOpen ? "transform rotate-180" : ""}`}
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

        {isOpen && (
          <div
            id="dropdown"
            className="absolute z-10 bg-white divide-y divide-slate-100 rounded-lg shadow w-32 top-[-110px] right-[-25px] dark:bg-slate-200"
          >
            <ul
              className="py-2 text-sm text-black dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-300 text-black"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-300 text-black"
                >
                 Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-300 text-black"
                >
                  Menu
                </a>
              </li>
              
             
              
            </ul>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
