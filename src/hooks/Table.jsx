import React from "react";

function Table() {
  return (
    <div className="table w-full px-[200px] ">
      <table className="w-full border-2 border-collapse border-gray-700">
        <tr className="text-center border-2 border-gray-700">
          <th className="text-center border-2 p-4 border-gray-700">#</th>
          <th className="text-center border-2 p-4 border-gray-700">Avatar</th>
          <th className="text-center border-2 p-4 border-gray-700">Emoji</th>
          <th className="text-center border-2 p-4 border-gray-700">Name</th>
          <th className="text-center border-2 p-4 border-gray-700">Fav Lang</th>
          <th className="text-center border-2 p-4 border-gray-700">Win Rate</th>
          <th className="text-center border-2 p-4 border-gray-700">Score</th>
          <th className="text-center border-2 p-4 border-gray-700">Actions</th>
        </tr>

        <tr className="border-2  border-gray-700">
          <td className="text-center border-2 p-4 border-gray-700">[2]</td>
          <td className="flex justify-center items-center  p-4 ">
            <img
              src="https://avatars.githubusercontent.com/u/101400379?v=4"
              alt="kidus"
              className="w-[40px] h-[40px] rounded-full"
            />
          </td>
          <td className="text-center border-2 p-4 border-gray-700">😍</td>
          <td className="text-center border-2 p-4 border-gray-700">
            Kidus Girma M.
          </td>
          <td className="text-center border-2 p-4 border-gray-700">
            JavaScript
          </td>
          <td className="text-center border-2 p-4 border-gray-700">100%</td>
          <td className="text-center border-2 p-4 border-gray-700">200</td>
          <td className="text-center border-2 p-4 border-gray-700">
            <a href="www.google.com">View Details</a>
          </td>
        </tr>

        {/* <TableRow></TableRow> */}
      </table>
    </div>
  );
}

export default Table;
