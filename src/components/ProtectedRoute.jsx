import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  const location = useLocation();

  if (!token) {
    // If user tries to access /admin/*, send to /admin/login
    if (location.pathname.startsWith("/admin")) {
      return <Navigate to="/admin/login" replace />;
    }
    // Otherwise send to normal login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
