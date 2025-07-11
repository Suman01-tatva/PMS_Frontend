import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/default_user.png";
import ProfileDropdown from "./ProfileDropdown";
import { PRIVATE_ROUTES } from "../../consts/routes";
import { navItemClass } from "../../consts/general";
import { FaBell } from "react-icons/fa";

interface Props {
  currentPath: string;
  onLogoutClick: () => void;
  onProfileToggle: () => void;
  onNotificationToggle: () => void;
  profileRef: React.RefObject<HTMLDivElement>;
  notificationRef: React.RefObject<HTMLDivElement>;
  isProfileOpen: boolean;
  isNotificationOpen: boolean;
}

const DesktopNav: React.FC<Props> = ({
  currentPath,
  onLogoutClick,
  onProfileToggle,
  onNotificationToggle,
  profileRef,
  notificationRef,
  isProfileOpen,
}) => {
  return (
    <div className="hidden lg:flex gap-6 items-center">
      <Link
        to={PRIVATE_ROUTES.DASHBOARD}
        className={navItemClass(PRIVATE_ROUTES.DASHBOARD, currentPath)}
      >
        Dashboard
      </Link>
      <Link
        to={PRIVATE_ROUTES.USER}
        className={navItemClass(PRIVATE_ROUTES.USER, currentPath)}
      >
        Users
      </Link>
      <Link
        to={PRIVATE_ROUTES.PROJECT}
        className={navItemClass(PRIVATE_ROUTES.PROJECT, currentPath)}
      >
        Projects
      </Link>

      <div className="relative bg-gray-200 rounded-2xl hover:bg-gray-300 transition duration-300" ref={notificationRef}>
        <button
          onClick={onNotificationToggle}
          className="text-lg text-gray-600 hover:text-gray-800 p-2 transition duration-300 hover:scale-120"
        >
          <FaBell />
        </button>
      </div>

      <div className="relative" ref={profileRef}>
        <button onClick={onProfileToggle} className="flex items-center gap-2">
          <img src={userImg} alt="User" className="w-10 h-10 rounded-full" />
        </button>
        {isProfileOpen && <ProfileDropdown onLogoutClick={onLogoutClick} />}
      </div>
    </div>
  );
};

export default DesktopNav;
