import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../features/auth/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../features/home/HomePage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../features/home/NotFoundPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import ForgotPasswordPage from "../features/auth/ForgotPasswordPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
    </Route>

    <Route element={<ProtectedRoutes />}>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/user" element={<UserPage />} /> */}
      </Route>
    </Route>

    <Route path="/" element={<HomePage />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
