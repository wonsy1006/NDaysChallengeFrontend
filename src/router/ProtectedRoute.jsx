import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Login from '../pages/Login';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return <Login />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
