import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../features/auth/pages/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../features/home/HomePage";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import NotFoundPage from "../features/home/NotFoundPage";
import DashboardPage from "../features/dashboard/DashboardPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../consts/routes";
import Users from "../features/user/pages/Users";
import Projects from "../features/project/pages/Projects";
import ProfilePage from "../features/user/pages/ProfilePage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path={PUBLIC_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={PUBLIC_ROUTES.FORGOTPASSWORD} element={<ForgotPasswordPage />} />
      <Route path={PUBLIC_ROUTES.RESETPASSWORD} element={<ResetPasswordPage />} />
    </Route>

    <Route element={<ProtectedRoutes />}>
      <Route element={<MainLayout />}>
        <Route path={PRIVATE_ROUTES.DASHBOARD}element={<DashboardPage />} />
        <Route path={PRIVATE_ROUTES.PROFILE}element={<ProfilePage />} />
        <Route path={PRIVATE_ROUTES.USER} element={<Users />} />
        <Route path={PRIVATE_ROUTES.PROJECT} element={<Projects />} />
      </Route>
    </Route>

    <Route path={PUBLIC_ROUTES.HOME} element={<HomePage />} />

    <Route path={PUBLIC_ROUTES.NOTFOUND} element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
