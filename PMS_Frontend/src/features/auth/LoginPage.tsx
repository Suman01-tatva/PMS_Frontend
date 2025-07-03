import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hook";
import LoginForm from "./components/LoginForm";
import { loginFailure, loginStart, loginSuccess } from "./authSlice";
import { useDispatch } from "react-redux";
import { loginUser } from "./authApi";
import { storeAccessToken, storeUSerData } from "../../utils/manageAccessToken";
import { useEffect } from "react";

const LoginPage: React.FC = () => {
  const { loading, error } = useAppSelector((state) => state.auth);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const navigate = useNavigate();
 
  const handleLogin = async (email: string, password: string) => {
    dispatch(loginStart());
    try {
      const response = await loginUser({ email, password, rememberMe: false });
      if (response.isSuccess) {
        dispatch(loginSuccess(response.data.user!)); 
        navigate("/home");
        storeUSerData(response.data.user!);
        storeAccessToken(response.data.token!);
      } else {
        dispatch(loginFailure(response.message || "Invalid credentials"));
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailure("Something went wrong"));
    }
  };
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);
  return <LoginForm loading={loading} error={error} onSubmit={handleLogin} />;
};

export default LoginPage;
