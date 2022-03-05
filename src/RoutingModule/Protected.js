import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const Protected = () => {
  const isAuth=window.localStorage.getItem('TokenValue')
  return isAuth ? <Outlet/>: <Navigate to="unauth_page" />;
};

export default Protected;
