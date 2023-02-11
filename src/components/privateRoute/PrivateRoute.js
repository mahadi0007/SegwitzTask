import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loggedIn =
    localStorage.getItem("email") && localStorage.getItem("pass")
      ? true
      : false;

  return loggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
