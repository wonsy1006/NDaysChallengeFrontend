import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { userInfo } = useSelector(state => state.user);
  const navigate = useNavigate();

  console.log(userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, user]);

  return <Outlet />;
};

export default ProtectedRoute;
