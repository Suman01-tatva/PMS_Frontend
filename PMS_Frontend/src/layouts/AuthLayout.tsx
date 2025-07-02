import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>Auth Header</header>
        <Outlet />
      <footer>Auth Footer</footer>
    </div>
  );
};

export default AuthLayout;
