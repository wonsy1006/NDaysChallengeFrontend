import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();

  console.log(user);

  // useEffect(() => {
  //   if (!user) {
  //     navigate('/login');
  //   }
  // }, [navigate, user]);

  return <Outlet />;
};

export default ProtectedRoute;
