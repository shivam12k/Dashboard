import logo from "../../assets/expand.svg";
import profile from "../../assets/avatars/avatar1.png";
import "./sidebar.css";
import Tabs from "./Tabs";
import tabData from "./tabsData";
import { tab } from "../../assets/icons/index";
import Dropdown from "./Dropdown";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useState } from "react";

const SideBar = ({sidebarOpen}) => {
   console.log(sidebarOpen)
   const [open, setOpen]=useState(true);
  return (
    <aside
    id="sidebar"
    // className={`pl-2 flex flex-col h-screen w-full relative ${openSideBar ? 'sidebar-responsive' : ''}`}
    className={`pl-2 flex flex-col h-screen w-full relativetransition-transform ${open ? '' : '-translate-x-full'} bg-white dark:bg-gray-800`} tabIndex="-1" aria-labelledby="drawer-navigation-label"
  >
  
      <div className="w-full h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="expand" className="h-10 mr-2" />
          <div>
            <h6 className="font-light text-sm">INC</h6>
            <h3 className="font-semibold text-lg">InnovationHub</h3>
          </div>
        </div>
        <img src={profile} alt="avatar" className="avatar" />
      </div>

      {/* team selection */}
      {tabData.map((data, key) => (
        <Tabs key={key} data={data} />
      ))}
      {/* create team */}
      <div className="flex flex-row w-full gap-1 mb-2 hover:bg-slate-200 items-center justify-between p-1">
        <span className="flex flex-row gap-[5px] text-slate-500">
          <span className="mt-1">
            <img src={tab} alt="pen" className="size-3" />
          </span>
          <span className="font-semibold text-[13px]">Create Team</span>
        </span>
      </div>

      {/* folders */}
      <div className="flex flex-col p-3 h-full justify-between">
        {/* add folders */}
        <div>
          <div className="flex flex-row w-full gap-1 mb-2 hover:bg-slate-200 items-center justify-between p-1">
            <span className="flex flex-row gap-[5px] text-slate-400">
              <span className="font-semibold text-[13px]">Folders</span>
            </span>
            <span className="w-8 h-6 flex items-center justify-center text-lg">
              +
            </span>
          </div>
          <Dropdown name={"Product"} isIcon={true} />
          <Dropdown name={"Sales"} isIcon={true} />
          <Dropdown name={"Design"} isIcon={true} />
          <Dropdown name={"Office"} isIcon={true}/>
        </div>
        {/* bottom div */}
        <div className="left-2 flex flex-col mt-auto">
          <div className="flex flex-row hover:bg-slate-200 py-1 ">
            <IoMdPersonAdd className="mt-1 mx-1" />
            <span>Invite Teammates</span>
          </div>

          <div className="flex mt-2 flex-row hover:bg-slate-200 py-1">
            <IoIosHelpCircleOutline className="mt-1 mx-1" />
            <span className="text-sm">Help and first steps</span>
          </div>
          <div className="flex flex-row bg-slate-100 rounded-lg my-2 px-2 mx-1">
            <span className="mt-2 text-sm">7 day trial left</span>
            <button
              type="button"
              className="text-white m-2 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg text-[0.7em] px-1 py-1 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/80 "
            >
              Add billing
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
