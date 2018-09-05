import React from 'react';
import { Link } from 'react-router-dom';

const RenderDiv = () => (
  <div className="login">
    <h4>
            Go back to
      <Link to="/login">Login</Link>
    </h4>
  </div>
);
export default RenderDiv;
