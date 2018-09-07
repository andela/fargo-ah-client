import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AppButton = ({ text, onClick }) => (
  <Button id="button" onClick={onClick}>
    {text}
  </Button>
);

export default AppButton;

AppButton.defaultProps = {
  onClick: null,
};

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
