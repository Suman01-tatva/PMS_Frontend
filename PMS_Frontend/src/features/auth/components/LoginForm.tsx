import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye } from '@fortawesome/free-solid-svg-icons';

interface LoginFormProps {
  loading: boolean;
  error?: string | null;
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ loading, error, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, rememberMe);
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     value={email}
    //     onChange={e => setEmail(e.target.value)}
    //     placeholder="Email"
    //     autoComplete="username"
    //   />
    //   <input
    //     value={password}
    //     onChange={e => setPassword(e.target.value)}
    //     type="password"
    //     placeholder="Password"
    //     autoComplete="current-password"
    //   />
    //   <button type="submit" disabled={loading}>
    //     {loading ? "Logging in..." : "Login"}
    //   </button>
    //   {error && <div style={{ color: "red" }}>{error}</div>}
    // </form>
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center space-x-2 text-gray-700 select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <span>Remember me</span>
          </label>
          <a
            href="/forgot-password"
            className="text-blue-600 hover:underline text-sm"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </>
  );
};

export default LoginForm;
