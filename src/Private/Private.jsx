import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (!user) return <Navigate state={location.pathname} to="/login"></Navigate>;

  return children;
};

export default Private;
