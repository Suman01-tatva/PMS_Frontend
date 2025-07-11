import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { PRIVATE_ROUTES } from "../../consts/routes";
import { navItemClass } from "../../consts/general";

const MobileDrawer: React.FC<Props> = ({
  isOpen,
  drawerRef,
  onClose,
  onLogoutClick,
}) => {
  const { pathname: currentPath } = useLocation();

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      onClick={onClose}
    >
      <div
        className="bg-white w-64 h-full p-4"
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h5 className="font-bold text-lg">Navigation</h5>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to={PRIVATE_ROUTES.DASHBOARD}
            className={navItemClass(PRIVATE_ROUTES.DASHBOARD, currentPath)}
            onClick={onClose}
          >
            Dashboard
          </Link>
          <Link
            to={PRIVATE_ROUTES.USER}
            className={navItemClass(PRIVATE_ROUTES.USER, currentPath)}
            onClick={onClose}
          >
            Users
          </Link>
          <Link
            to={PRIVATE_ROUTES.PROJECT}
            className={navItemClass(PRIVATE_ROUTES.PROJECT, currentPath)}
            onClick={onClose}
          >
            Projects
          </Link>
          <Link
            to={PRIVATE_ROUTES.PROFILE}
            className={navItemClass(PRIVATE_ROUTES.PROFILE, currentPath)}
            onClick={onClose}
          >
            Profile
          </Link>
          <button
            onClick={onLogoutClick}
            className="mt-4 text-red-600 text-left"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
