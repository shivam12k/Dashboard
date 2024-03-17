import { useEffect, useState } from "react";

const Categories = ({ category, color }) => {
  return (
    <button
      type="button"
      style={{ color: color, borderColor: color }}
      className={`border border-${color} bg-[#6366f1]/10 hover:bg-opacity-50 focus:ring-4 focus:outline-none focus:ring-${color} font-medium rounded-lg text-xs px-1 py-0.5 text-center me-1 mb-1`}
    >
      {category}
    </button>
  );
};

export default Categories;
