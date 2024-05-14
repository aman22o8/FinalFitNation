import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'

const PrivateRoute = ({ isLoggedIn, children }) => {
  const jwtToken = Cookies.get('jwt_token')
  if (isLoggedIn || jwtToken!==undefined) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
