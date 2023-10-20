import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Login = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();

  return (
    <div>
      Login Page
      <button
        onClick={() => {
          login();
          navigate("/");
        }}
      >
        Log-in
      </button>
    </div>
  );
};

export default Login;
