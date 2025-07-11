import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import {
  submitResetPasswordThunk,
  validateResetTokenThunk,
} from "../authSlice";
import ResetPasswordForm from "../components/ResetPasswordFoorm";
import { toast } from "react-toastify";
import toastService from "../../../utils/toastr";

const ResetPasswordPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState<string>("");
  const { token } = useParams<{ token: string }>();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    let isMounted = true;

    const validateToken = async () => {
      if (!token) {
        if (isMounted) {
          navigate("/login");
          toastService.error("Invalid Link or missing token.");
          return;
        }
      }

      try {
        const resultAction = await dispatch(
          validateResetTokenThunk({ token } as ForgotPasswordToken)
        );
        if (
          isMounted &&
          validateResetTokenThunk.fulfilled.match(resultAction)
        ) {
          setEmail(resultAction.payload.email);
        } else if (isMounted) {
          navigate("/login");
        }
      } catch {
        if (isMounted) navigate("/login");
      }
    };

    validateToken();

    return () => {
      isMounted = false;
    };
  }, [token, navigate, dispatch]);

  const handleResetPassword = async (
    values: ResetPasswordFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const resultAction = await dispatch(
        submitResetPasswordThunk({
          ...values,
          Email: email,
        } as ResetPasswordFormValues)
      );
      if (submitResetPasswordThunk.fulfilled.match(resultAction)) {
        navigate("/login");
      }
    } catch (error) {
      toast.error("Reset password failed. Please try again.");
      console.error("Reset password failed:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <ResetPasswordForm
        loading={loading}
        error={error}
        onSubmit={handleResetPassword}
        email={email}
      />
    </div>
  );
};

export default ResetPasswordPage;
