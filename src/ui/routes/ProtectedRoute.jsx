import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAppContext();

  if (!isAuth) return <Navigate to="login" />;
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
