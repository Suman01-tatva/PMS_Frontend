import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { RootState } from "../../app/store";
import { logout } from "../../features/auth/authSlice";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import DeleteConfirmationModal from "../../common/modals/DeleteConfirmationModal";
import userImg from "../../assets/images/default_user.png";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItemClass = (path: string) =>
    `px-3 py-2 rounded hover:bg-gray-100 transition-colors ${
      currentPath === path ? "font-semibold text-blue-600 no-underline" : ""
    }`;

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    localStorage.setItem("isAuthenticated", "false");
    Cookies.remove("access_token");
    localStorage.removeItem("user");
    navigate("/login");
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-fluid mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold no-underline text-gray-800">
            PMS
          </Link>

          <div className="hidden lg:flex gap-6 items-center">
            <Link to="/" className={navItemClass("/")}>
              Dashboard
            </Link>
            <Link to="/users" className={navItemClass("/users")}>
              Users
            </Link>
            <Link to="/projects" className={navItemClass("/projects")}>
              Projects
            </Link>
            <div className="relative">
              <button className="relative text-lg text-gray-600 hover:text-gray-800">
                <i className="fa-solid fa-bell" />
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-md z-40 hidden group-hover:block">
                <div className="p-3">No new notifications</div>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center gap-2 focus:outline-none"
              >
                <img
                  src={userImg}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {isProfileDropdownOpen && (
                <ul className="absolute right-0 p-0 mt-2 w-48 bg-white border rounded shadow-md z-40">
                  <li className="px-4 py-2 flex gap-2 font-semibold">
                    <img
                      src={userImg}
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                    {user ? user.name : "Guest"}
                  </li>
                  <li>
                    <hr className="border-t my-1" />
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="w-full px-4 py-2 items-center hover:bg-gray-100 flex gap-2"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      <FaUser />
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="w-full text-left px-4 py-2 gap-2 flex items-center mb-2 text-red-600 hover:bg-gray-100"
                      onClick={() => {
                        handleLogoutClick();
                        setProfileDropdownOpen(false);
                      }}
                    >
                      <IoIosLogOut /> <span>LogOut</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <button
            className="lg:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <i className="fa-solid fa-bars text-xl" />
          </button>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
            <div
              className="bg-white w-64 h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h5 className="font-bold text-lg">Navigation</h5>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <i className="fa-solid fa-times text-xl" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className={navItemClass("/")}
                  onClick={() => setDrawerOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/users"
                  className={navItemClass("/users")}
                  onClick={() => setDrawerOpen(false)}
                >
                  Users
                </Link>
                <Link
                  to="/projects"
                  className={navItemClass("/projects")}
                  onClick={() => setDrawerOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  to="/profile"
                  className={navItemClass("/profile")}
                  onClick={() => setDrawerOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogoutClick();
                    setDrawerOpen(false);
                  }}
                  className="mt-4 text-red-600 text-left"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
        title="Logout Confirmation"
        message="Are you sure you want to log out?"
        confirmText="Yes"
        cancelText="No"
      />
    </>
  );
};

export default Navbar;
