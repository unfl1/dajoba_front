// src/components/PrivateRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.user.isAuthenticated);

  return isLoggedIn ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;