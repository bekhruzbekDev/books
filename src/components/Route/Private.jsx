import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
export const Private = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="login" />;
  }
  return <>{children}</>;
};
Private.propTypes = {
  children: PropTypes.node,
};
