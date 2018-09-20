import React from 'react';
import PropTypes from 'prop-types';

const SelectListControl = ({
  name, value, options, onChange,
}) => {
  const selectListOptions = options.map(option => (
    <option value={option.value} key={option.label}>
      {option.label}
    </option>
  ));
  return (
    <div>
      <select className="ui compact selection dropdown" name={name} value={value} onChange={onChange} required>
        {selectListOptions}
      </select>
    </div>
  );
};

SelectListControl.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectListControl;
