import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { accessToken } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/login');
  //   }
  // }, [navigate, accessToken]);

  return <Outlet />;
};

export default ProtectedRoute;
