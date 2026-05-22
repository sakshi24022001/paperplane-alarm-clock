import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Clock</Link>
      <Link to="/alarms">Alarm</Link>
    </div>
  );
};

export default Navbar;