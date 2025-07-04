import { BrowserRouter } from "react-router";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => (
  <BrowserRouter>
    <AppRoutes />
    <ToastContainer />
  </BrowserRouter>
);

export default App;
