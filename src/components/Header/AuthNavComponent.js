import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const AuthNav = () => (
  <div className="right menu">
    <div className="item">
      <Link to="/">
        <Button text="Home" />
      </Link>
    </div>
  </div>
);

export default AuthNav;
