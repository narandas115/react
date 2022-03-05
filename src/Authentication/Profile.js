import React from 'react';

import { useNavigate } from 'react-router-dom';


const Profile = () => {

    const navigate=useNavigate();

    const loggingOut=()=>{
        window.localStorage.clear();
        navigate('/login_page');

    }

  return (
        <div>
            <h1>Welcome to Your Profile</h1>
            <button onClick={loggingOut}>logout</button>
        </div>
    );
};

export default Profile;
