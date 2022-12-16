import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // 구현 단계에서는 주석처리
  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate('/');
  //   }
  // }, [navigate, userInfo]);

  return <Outlet />;
};

export default ProtectedRoute;
