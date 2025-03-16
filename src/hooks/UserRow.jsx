import React from "react";

const UserRow = ({ index, user, favoriteLang }) => {
    // console.log(favoriteLang );
  return (
    <tr className="border-2 border-gray-700">
      <td className="text-center border-2 p-4 border-gray-700">[{index}]</td>
        

      <td className="flex justify-center items-center p-4">
        <img
          src={user?.avatar_url || "https://avatars.githubusercontent.com/u/101400379?v=4"}
          alt={user?.name || "User Avatar"}
          className="w-[40px] h-[40px] rounded-full"
        />
      </td>

      <td className="text-center border-2 p-4 border-gray-700">😍</td>
      <td className="text-center border-2 p-4 border-gray-700">{user?.name || user?.login ||"Loading ..."}</td>
      <td className="text-center border-2 p-4 border-gray-700">{favoriteLang}</td>
      <td className="text-center border-2 p-4 border-gray-700">100%</td>
      <td className="text-center border-2 p-4 border-gray-700">200</td>
      <td className="text-center border-2 p-4 border-gray-700">
        <a href={user?.html_url || "https://www.google.com"} target="_blank" rel="noopener noreferrer">
          View Details
        </a>
      </td>
    </tr>
  );
};

export default UserRow;
