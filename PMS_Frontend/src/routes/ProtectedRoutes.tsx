import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hook"; // Your typed useSelector

const ProtectedRoutes: React.FC = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  // const isAuthenticated = true;
  console.log("ProtectedRoutes isAuthenticated:", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;