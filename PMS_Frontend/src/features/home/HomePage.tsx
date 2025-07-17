import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hook";

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <div>
      HomePage
      <div>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default HomePage
