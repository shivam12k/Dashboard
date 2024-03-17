import { MdMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Header = ({toggleSidebar}) => {
  
  
  return (
    <header className="header h-20 w-full flex flex-row items-center relative ">
     <div className="menu-icon" onClick={toggleSidebar}><GiHamburgerMenu size={"30px"} className="icon"/></div>
        <div className="md:w-1/2 pl-10 md:flex md:items-center md:justify-start mr-4">
          <h2 className="text-xl font-medium">Product </h2>
        </div>

        {/* Search option */}
        <div className="ml-auto w-full md:w-auto flex items-center  pr-10">
          <div className="search relative flex flex-row items-center">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <CiSearch />
            </span>
            <input
              className="pl-10 border rounded-md shadow-md"
              placeholder="Search for.."
            />

            <div className="ml-2">
              <div className="border rounded-md hover:bg-slate-200 shadow-md px-1 flex justify-center items-center">
                <MdMessage />
              </div>
            </div>

            <div className="ml-2">
              <div className="border rounded-md hover:bg-slate-200 shadow-md px-1 flex justify-center items-center">
                <IoMdSettings />
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
