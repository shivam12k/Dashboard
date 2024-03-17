import Avatar from "react-avatar";
import Categories from "./Categories";
import { useState, useEffect } from "react";

// Function to generate a random color
const getRandomColor = () => {
  const colors = [
    "#1da1f2",
    "#f21d99",
    "#fb7185",
    "#be123c",
    "#a855f7",
    "#6366f1",
    "#0ea5e9",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Row = ({ row }) => {
  // Generate random colors for each avatar
  //   const color1 = "";
  //   const color2 = getRandomColor();
  //   const color3 = getRandomColor();
  const [timeColor, setTimeColor] = useState("#1da1f2");

  useEffect(() => {
    setTimeColor(getRandomColor());
  }, []); // Run once on component mount

  return (
    <tr className="h-10 hover:bg-slate-200">
      <td className="px-6 pt-2 whitespace-nowrap flex flex-row pb-1 items-center gap-1 overflow-x-scroll no-scrollbar">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 mt-2 mr-1 text-indigo-600 transition duration-150 ease-in-out"
        />
        <img src={row.icon} className="h-[1.3em] mt-1" alt="" />
        <span className="font-semibold mt-1">{row.BrandName}</span>
      </td>
      {/* discription */}
      <td className="px-6 py-2 font-semibold whitespace-nowrap max-w-[200px]  overflow-x-scroll no-scrollbar ">
        {row.description}
      </td>
      <td className="px-6 py-2 font-semibold whitespace-nowrap max-w-[200px]  overflow-x-scroll no-scrollbar">
        <span className="flex flex-row space-x-[-8px]  overflow-x-scroll no-scrollbar">
          {row.members.map((name, key) => (
            <Avatar
              name={name}
              textSizeRatio={1.75}
              size="30"
              round="50%"
              color={getRandomColor()}
              key={key}
            />
          ))}
        </span>
      </td>
      {/* categories */}
      <td className="px-2 py-2 whitespace-nowrap flex flex-row max-w-[200px]  overflow-x-scroll no-scrollbar">
        {row.categories.map((category, key) => (
          <Categories
            category={category}
            key={key}
            color={getRandomColor()} // Fixed prop name to 'color'
          />
        ))}
      </td>
      {/* Tags */}
      <td className="px-6 py-2 whitespace-nowrap max-w-[200px]  overflow-x-scroll no-scrollbar">
        <div className="max-w-[200px] overflow-x-scroll no-scrollbar">
          <div className="flex">
            <span>
              {row.tags.map((element, index) => (
                <span
                  className="border border-gray-400 text-sm px-1 rounded-sm"
                  key={index}
                >
                  {element}
                </span>
              ))}
            </span>
          </div>
        </div>
      </td>
      {/* meeting time */}
      <td className="px-6 py-2 whitespace-nowrap max-w-[200px]  overflow-x-scroll no-scrollbar">
        <button
          type="button"
          style={{ color: timeColor, borderColor: timeColor }}
          className={`border bg-[#6366f1]/10 hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-${timeColor} font-medium rounded-lg text-xs px-2 py-1 text-center me-1 mb-1`}
        >
          {row.nextMeeting}
        </button>
      </td>
    </tr>
  );
};

export default Row;
