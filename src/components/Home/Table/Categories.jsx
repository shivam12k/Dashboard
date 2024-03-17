import { useEffect, useState } from "react";

const Categories = ({ category }) => {
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
  const [color, setColor] = useState("#6366f1");
  useEffect(() => {
    setColor(getRandomColor())
  }, []);

  return (
    <button
      type="button"
      className={`text-[${color}]  border border-[${color}] bg-[${color}]/10 hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-[${color}] font-medium rounded-lg text-xs px-1 py-0.5 text-center me-1 mb-1`}
    >
      {category}
    </button>
  );
};

export default Categories;
