import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
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
