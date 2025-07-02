import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../features/auth/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../features/home/HomePage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../features/home/NotFoundPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<LoginPage />} />
    </Route>

    <Route element={<ProtectedRoutes />}>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/user" element={<UserPage />} /> */}
      </Route>
    </Route>

    <Route path="/" element={<HomePage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
