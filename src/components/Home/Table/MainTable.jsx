import React from "react";
import { FaCheck } from "react-icons/fa"; // Import the check icon if needed
import Colums from "./Colums";
import { col, Rowdata } from "./tableData";
import Row from "./Row";

const MainTable = () => {
  return (
    <div className="w-full h-svh">
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 w-full">
              <tr>
                {col.map((c, key) => (
                  <Colums name={c} key={key} />
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 overflow-hidden">
              {/* Table rows */}
              {Rowdata.map((row, key) => (
                <Row row={row} key={key} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainTable;
