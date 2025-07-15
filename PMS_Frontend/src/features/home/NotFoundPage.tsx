import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../consts/routes";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <Link
        to={PUBLIC_ROUTES.LOGIN}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
