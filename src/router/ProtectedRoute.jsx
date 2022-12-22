import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // 구현 단계에서는 주석처리
  // useEffect(() => {
  //   if (!user) {
  //     navigate('/');
  //   }
  // }, [navigate, user]);

  return <Outlet />;
};

export default ProtectedRoute;
