import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import LoginForm from "./components/LoginForm";
import { storeAccessToken, storeUserData, storeIsAuthenticated } from "../../utils/autUtils";
import { loginUser } from "./authApi";
import toastService from "../../utils/toastr";
import { handleApiError } from "../../utils/errorHandler";
import { hideLoader, showLoader } from "../loader/loaderSlice";
import { loginFailure, loginStart, loginSuccess } from "./authSlice";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    dispatch(loginStart());
    dispatch(showLoader());
    try {
      const response = await loginUser({
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
      });
        dispatch(loginSuccess(response.data.user!));
        storeUserData(response.data.user!);
        storeIsAuthenticated(true);
        storeAccessToken(response.data.token!, values.rememberMe);
        toastService.success(response.message || "Login successful!");
        navigate("/dashboard");
    } catch (err) {
      const errorMessage = handleApiError(err.message, 'Invalid credentials. Please try again.');
      dispatch(loginFailure(errorMessage));
      toastService.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
    dispatch(hideLoader());
  };

  return (
    <div>
      <LoginForm loading={loading} error={error} onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;