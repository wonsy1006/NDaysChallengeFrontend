import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Router from './router/router';
import { signIn } from './utils/auth';
import Navigation from './components/common/Navigation';
import Header from './components/common/Header';
import Layout from './components/layout/Layout';

const App = () => {
    let location = useLocation();

  return (
    <Layout>
      <Router/>
      {location.pathname === '/welcome' ? null : <Navigation />}
    </Layout>
  );
};

export default App;
