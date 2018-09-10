import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Nav = ({ text }) => (
  <div className="right menu">
    <div className="item left become-member">
      <Link to="/login">
        Become a member
      </Link>
    </div>
    <div className="item">
      <Link to="/write" className="tell-story">
        <img
          alt="Pen"
          src="https://res.cloudinary.com/blackincode/image/upload/v1536149768/fountain-pen-close-up_gfzl7b.svg"
        />
        Tell a story
      </Link>
    </div>
    <div className="item">
      <Link to="/login">
        <Button
          text={text}
        />
      </Link>
    </div>
  </div>
);


export default Nav;

Nav.propTypes = {
  text: PropTypes.string.isRequired,
};
