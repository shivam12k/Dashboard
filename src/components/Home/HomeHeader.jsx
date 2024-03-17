import SelectionDropDown from "./SelectionDropDown";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";
import selections from "./Selection";
import { CiSquarePlus } from "react-icons/ci";
import { MdImportExport } from "react-icons/md";

const HomeHeader = () => {
  console.log(selections);
  return (
    <div className="w-full md:flex md:flex-col md:h-100 px-5">
      <div className="flex flex-col md:flex-row gap-5">
        {/* selection of brand */}
        <SelectionDropDown
          options={selections.brands}
          name="Brands"
          Isicon={true}
        />

        {/* selection of Desk */}
        <SelectionDropDown
          options={selections.desks}
          name={"Desks"}
          Isicon={false}
        />

        {/* selection of Tags */}
        <SelectionDropDown
          options={selections.tags}
          name={"Tags"}
          Isicon={false}
        />

        <button
          type="button"
          className="hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-white text-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        >
          <FaSortAlphaDown className="mx-1" />
          Sort
        </button>
        <button
          type="button"
          className="hover:bg-slate-200 focus:ring-4 focus:outline-none text-slate-500 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
        >
          <FaSlidersH className="mx-1" />
          Filter
        </button>
        <div className="flex ml-auto items-center">
          <button
            type="button"
            className="hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-white text-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          >
            <CiSquarePlus className="mx-1" />
            Meeting
          </button>
          <button
            type="button"
            className="hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-white text-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          >
            <MdImportExport className="mx-1" />
            Import/Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
