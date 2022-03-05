import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnAuth = () => {
    const navigate=useNavigate();
    
    const logIn=()=>{
        window.localStorage.clear();
        navigate('/login_page');
    }

    
  return (
  <div>
      <h1>You are Unauthorized for this page please login</h1>
      <button onClick={logIn}>Login</button>
  </div>
  );
};

export default UnAuth;
