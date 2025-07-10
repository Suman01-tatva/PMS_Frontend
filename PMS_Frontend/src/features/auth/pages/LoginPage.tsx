import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import LoginForm from "../components/LoginForm";
import { loginThunk } from "../authSlice";

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
    const resultAction = await dispatch(loginThunk(values));
    if (loginThunk.fulfilled.match(resultAction)) {
      navigate("/dashboard");
    }
    setSubmitting(false);
  };

  return (
    <div>
      <LoginForm loading={loading} error={error} onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;