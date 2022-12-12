import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Router from './router/router';
import Navigation from './components/common/Navigation';
import Header from './components/common/Header';
import Layout from './components/layout/Layout';
import { getUserDetails } from './app/module/userSlice';

const App = () => {
  let location = useLocation();

  const { user, accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // accessToken 보유 시에 사용자 정보 dispatch
  useEffect(() => {
    if (accessToken) {
      dispatch(getUserDetails());
    }
  }, [accessToken, dispatch]);

  console.log(`header: ${user}, ${accessToken}`);

  return (
    <Layout>
      {location.pathname === '/welcome' ? null : <Header />}
      <Router />
      {location.pathname === '/welcome' ? null : <Navigation />}
    </Layout>
  );
};

export default App;
