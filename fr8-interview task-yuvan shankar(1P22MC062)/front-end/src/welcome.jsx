import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Library management system</h1>
      <h3>Are you a admin</h3>
      <Link to='/admin' style={{textDecoration:"none"}}><button className="form-button" type="submit">Admin</button></Link>
      <h3>Are you a student</h3>
      <Link to='/studentregister' style={{textDecoration:"none"}}><button className="form-button" type="submit">Student</button></Link>
    </div>
  );
}

export default WelcomeScreen;
