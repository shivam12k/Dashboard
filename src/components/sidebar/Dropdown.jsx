import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFolder } from "react-icons/fa";

const Dropdown = ({name , isIcon}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown mt-1 ">
     <div className="flex flex-row justify-between items-center hover:bg-slate-200">
  <span className="flex flex-row gap-2 "> {(isIcon)?<FaFolder  className="mt-1"/>:null} {name}</span>
  <a href="#" data-toggle="dropdown" onClick={handleDropdownToggle}> <IoMdArrowDropdown /></a>
</div>
      <div className={`dropdown-menu ${isDropdownOpen ? "show" : "hide"}`}>
        <ul>
          <li>
            <a href="#">Option 1</a>
          </li>
          <li>
            <a href="#">Option 2</a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
