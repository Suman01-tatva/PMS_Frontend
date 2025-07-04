import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAppDispatch } from '../../app/hook';
import { logout } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import Cookies from 'js-cookie';

const Navbar : React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const user = useSelector((state: RootState) => state.auth.user);
    const [isDrawerOpen, setDrawerOpen] = useState(false);


    const navItemClass = (path: string) =>
        `px-3 py-2 rounded hover:bg-gray-100 ${currentPath === path ? 'font-semibold text-blue-600' : ''}`;
  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("isAuthenticated", "false");
    Cookies.remove("access_token");
    localStorage.removeItem("user");
    navigate('/login');
  };
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container-fluid mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        PMS
      </Link>

      <div className="hidden lg:flex gap-6 items-center">
        <Link to="/" className={navItemClass('/')}>Dashboard</Link>
        {
        // (user.role === ROLE.SUPERADMIN || user.role === ROLE.ADMIN) && 
        (
          <Link to="/users" className={navItemClass('/users')}>Users</Link>
        )}
        <Link to="/projects" className={navItemClass('/projects')}>Projects</Link>
        <button  onClick={handleLogout}>Logout</button>
        {
        // user.role === ROLE.DEVELOPER && 
        (
          <div className="relative">
            <button className="relative text-lg">
              <i className="fa-solid fa-bell" />
            </button>
            {/* Notifications Dropdown */}
            <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-md z-40 hidden group-hover:block">
              <div className="p-3">No new notifications</div>
            </div>
          </div>
        )}

        <div className="relative group">
          <button className="flex items-center gap-2">
            <img src="/images/Default_pfp.svg.png" alt="pfp" className="w-10 h-10 rounded-full" />
          </button>
          <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-40 hidden group-hover:block">
            <li className="px-4 py-2 font-semibold">{user ? user.name : 'Guest'}</li>
            <li><hr className="border-t my-1" /></li>
            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">👤 Profile</Link>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket mr-1" /> Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setDrawerOpen(false)}>
          <div
            className="bg-white w-64 h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="font-bold text-lg mb-4">Navigation</h5>
            <Link to="/" className={navItemClass('/')}>Dashboard</Link>
            {
            // (user.role === ROLE.SUPERADMIN || user.role === ROLE.ADMIN) && 
            (
              <Link to="/users" className={navItemClass('/users')}>Users</Link>
            )}
            <Link to="/projects" className={navItemClass('/projects')}>Projects</Link>
            <Link to="/profile" className={navItemClass('/profile')}>Profile</Link>
            <button onClick={handleLogout} className="mt-4 text-red-600">Log Out</button>
          </div>
        </div>
      )}

      {/* Mobile menu button */}
      <button className="lg:hidden" onClick={() => setDrawerOpen(!isDrawerOpen)}>
        <i className="fa-solid fa-bars text-xl" />
      </button>
    </div>
  </nav>
  )
}

export default Navbar
