import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header>Main Header</header>
      <nav>Main Navigation</nav>
        <Outlet />
      <footer>Main Footer</footer>
    </div>
  );
};

export default MainLayout;