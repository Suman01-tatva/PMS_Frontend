import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { loginFailure, loginStart, loginSuccess } from './authSlice';
import { useNavigate } from 'react-router';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      // Simulate API call (replace this with your real API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (email === "test@gmail.com" && password === "password") {
        dispatch(loginSuccess({ id: "1", name: "Test User", email }));
        console.log("Login successful", { id: "1", name: "Test User", email });
      } else {
        dispatch(loginFailure("Invalid credentials"));
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
}

export default LoginPage
