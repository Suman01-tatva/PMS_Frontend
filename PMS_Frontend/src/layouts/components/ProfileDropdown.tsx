import React from "react";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import userImg from "../../assets/images/default_user.png";
import { useAppSelector } from "../../app/hook";

const ProfileDropdown: React.FC<{ onLogoutClick: () => void }> = ({
  onLogoutClick,
}) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <ul className="absolute right-0 p-0 mt-2 w-48 bg-white border rounded shadow-md z-40">
      <li className="px-4 py-2 flex items-center gap-2 font-semibold">
        <img src={userImg} alt="User" className="w-10 h-10 rounded-full" />
        {user?.name || "Guest"}
      </li>
      <li>
        <hr className="border-t my-1" />
      </li>
      <li>
        <Link
          to="/profile"
          className="w-full px-4 py-2 items-center hover:bg-gray-100 flex gap-2"
        >
          <FaUser />
          <span>Profile</span>
        </Link>
      </li>
      <li>
        <button
          className="w-full text-left px-4 py-2 gap-2 flex items-center text-red-600 hover:bg-gray-100"
          onClick={onLogoutClick}
        >
          <IoIosLogOut />
          Log Out
        </button>
      </li>
    </ul>
  );
};

export default ProfileDropdown;
