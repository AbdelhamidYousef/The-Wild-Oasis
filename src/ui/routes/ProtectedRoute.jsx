import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useDarkModeContext();

  if (!isAuth) return <Navigate to="login" />;
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
