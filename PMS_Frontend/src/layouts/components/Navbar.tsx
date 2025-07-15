import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hook";
import { logout } from "../../features/auth/authSlice";
import Cookies from "js-cookie";
import { FaBars, FaBell } from "react-icons/fa";
import DesktopNav from "./NavbarTabs";
import NotificationDropdown from "./NotificationDropdown";
import MobileDrawer from "./Sidebar";
import ConfirmationModal from "../../common/components/PopUpModal";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname: currentPath } = useLocation();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);

  const profileDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const drawerRef = useRef(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target as Node)
    )
      setNotificationDropdownOpen(false);
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target as Node)
    )
      setProfileDropdownOpen(false);
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node))
      setDrawerOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-fluid mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold underline-none text-gray-800"
          >
            PMS
          </Link>

          <DesktopNav
            currentPath={currentPath}
            onLogoutClick={handleLogoutClick}
            onProfileToggle={() => {
              setProfileDropdownOpen((prev) => !prev);
              setNotificationDropdownOpen(false);
              setDrawerOpen(false);
            }}
            onNotificationToggle={() => {
              setNotificationDropdownOpen((prev) => !prev);
              setProfileDropdownOpen(false);
              setDrawerOpen(false);
            }}
            profileRef={profileDropdownRef}
            notificationRef={notificationDropdownRef}
            isProfileOpen={isProfileDropdownOpen}
            isNotificationOpen={isNotificationDropdownOpen}
          />

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => {
                setNotificationDropdownOpen((prev) => !prev);
                setProfileDropdownOpen(false);
                setDrawerOpen(false);
              }}
              className="text-lg text-gray-600 hover:text-gray-800"
            >
              <FaBell />
            </button>
            <button
              onClick={() => {
                setDrawerOpen((prev) => !prev);
                setProfileDropdownOpen(false);
                setNotificationDropdownOpen(false);
              }}
              className="text-xl text-gray-600 hover:text-gray-800"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {isNotificationDropdownOpen && (
        <NotificationDropdown notificationsRef={notificationDropdownRef} />
      )}

      <MobileDrawer
        isOpen={isDrawerOpen}
        drawerRef={drawerRef}
        onClose={() => setDrawerOpen(false)}
        onLogoutClick={handleLogoutClick}
      />

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmLogout}
        title="Logout Confirmation"
        confirmText="Yes"
        cancelText="No"
        size="md"
      >
        Are you sure you want to log out?
      </ConfirmationModal>
    </>
  );
};

export default Navbar;
