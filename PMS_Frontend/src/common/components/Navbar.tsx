import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { logout } from "../../features/auth/authSlice";
import Cookies from "js-cookie";
import DeleteConfirmationModal from "./PopUpModal"; 
import userImg from "../../assets/images/default_user.png";
import { FaBars, FaBell, FaUser, FaTimes } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { PRIVATE_ROUTES } from "../../consts/routes";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();
  const user = useAppSelector((state) => state.auth.user);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

  const notificationDropdownRef = useRef<HTMLDivElement | null>(null);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  // Toggle functions with mutual exclusivity
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
    setNotificationDropdownOpen(false);
    setDrawerOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen((prev) => !prev);
    setProfileDropdownOpen(false);
    setDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
    setProfileDropdownOpen(false);
    setNotificationDropdownOpen(false);
  };

  // Navigation item styles
  const navItemClass = (path: string) =>
    `px-3 py-2 rounded hover:bg-gray-100 transition-colors ${
      currentPath === path ? "font-semibold text-blue-600 underline-none" : ""
    }`;

  // Handle logout
  const handleLogoutClick = () => {
    setModalOpen(true);
    setProfileDropdownOpen(false);
    setDrawerOpen(false);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    localStorage.setItem("isAuthenticated", "false");
    Cookies.remove("access_token");
    localStorage.removeItem("user");
    navigate("/login");
    setModalOpen(false);
  };

  // Handle click outside for closing dropdowns and drawer
  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target as Node)
    ) {
      setNotificationDropdownOpen(false);
    }
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target as Node)
    ) {
      setProfileDropdownOpen(false);
    }
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Placeholder for notifications (could be fetched from Redux or API)
  const notifications = [
    { id: 1, message: "John Doe mentioned you in a comment." },
    { id: 2, message: "Project X status changed to 'In Progress'." },
    { id: 3, message: "System updated your profile." },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-fluid mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold underline-none text-gray-800">
            PMS
          </Link>

          {/* Desktop Navigation */}
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

            {/* Notification Dropdown */}
            <div className="relative" ref={notificationDropdownRef}>
              <button
                onClick={toggleNotificationDropdown}
                className="text-lg text-gray-600 hover:text-gray-800 focus:outline-none"
                aria-label="Notifications"
                aria-expanded={isNotificationDropdownOpen}
              >
                <FaBell />
              </button>
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center gap-2 focus:outline-none"
                aria-label="User profile"
                aria-expanded={isProfileDropdownOpen}
              >
                <img
                  src={userImg}
                  alt={user ? `${user.name}'s profile` : "User profile"}
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {isProfileDropdownOpen && (
                <ul className="absolute right-0 p-0 mt-2 w-48 bg-white border rounded shadow-md z-40">
                  <li className="px-4 py-2 flex items-center gap-2 font-semibold">
                    <img
                      src={userImg}
                      alt={user ? `${user.name}'s profile` : "User profile"}
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
                      onClick={handleLogoutClick}
                    >
                      <IoIosLogOut />
                      <span>Log Out</span>
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
                onClick={toggleNotificationDropdown}
                className="text-lg text-gray-600 hover:text-gray-800 focus:outline-none"
                aria-label="Notifications"
                aria-expanded={isNotificationDropdownOpen}
              >
                <FaBell />
              </button>
            <button
              onClick={toggleDrawer}
              className="text-xl text-gray-600 hover:text-gray-800"
              aria-label="Toggle menu"
              aria-expanded={isDrawerOpen}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
            <div
              ref={drawerRef}
              className="bg-white w-64 h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h5 className="font-bold text-lg">Navigation</h5>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to={PRIVATE_ROUTES.DASHBOARD}
                  className={navItemClass("/dashboard")}
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
                  onClick={handleLogoutClick}
                  className="mt-4 text-red-600 text-left"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {isNotificationDropdownOpen && (
                <div className="absolute right-0 mt-14 me-16 w-64 bg-white border rounded shadow-md z-50">
                  <div className="p-3 font-semibold text-gray-700 border-b">
                    Notifications
                  </div>
                  <div className="p-3">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="mb-2 text-sm text-gray-600"
                        >
                          {notification.message}
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-gray-600">
                        No new notifications
                      </div>
                    )}
                  </div>
                </div>
              )}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
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