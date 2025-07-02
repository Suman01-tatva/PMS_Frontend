import { BrowserRouter } from "react-router";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
