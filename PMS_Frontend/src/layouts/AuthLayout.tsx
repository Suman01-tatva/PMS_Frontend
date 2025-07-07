import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
     <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4 py-8 box-border"
      style={{ overflowX: "hidden" }}
    >
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 mx-auto box-border">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
