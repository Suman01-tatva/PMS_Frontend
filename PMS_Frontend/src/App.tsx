import { BrowserRouter } from "react-router";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import Loader from "./common/components/loader/Loader";

const App: React.FC = () => (
  <BrowserRouter>
    <Loader />
    <AppRoutes />
    <ToastContainer />
  </BrowserRouter>
);

export default App;
