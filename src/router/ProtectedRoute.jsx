import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';

const ProtectedRoute = () => {
  const { userInfo, success } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  },[navigate, userInfo]);

  return <Outlet />;
};

export default ProtectedRoute;
