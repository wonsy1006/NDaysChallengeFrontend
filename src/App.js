import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Router from './router/router';
import { signIn } from './utils/auth';
import Navigation from './components/common/Navigation';
import Header from './components/common/Header';
import Layout from './components/layout/Layout';

const App = () => {
  let location = useLocation();

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <Layout>
      {location.pathname === '/welcome' ? null : <Header />}
      <Router />
      {location.pathname === '/welcome' ? null : <Navigation />}
    </Layout>
  );
};

export default App;
