import React from 'react';
import '../App.css';
import rockGlass from '../images/rockGlass.svg';

function Register() {
  return (
    <div className="Register">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default Register;
