import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Router from './router/router';
import Navigation from './components/common/Navigation';
import Header from './components/common/Header';
import Layout from './components/layout/Layout';

const App = () => {
  let location = useLocation();

  return (
    <Layout>
      {location.pathname === '/welcome' ? null : <Header />}
      <Router />
      {location.pathname === '/welcome' ? null : <Navigation />}
    </Layout>
  );
};

export default App;
