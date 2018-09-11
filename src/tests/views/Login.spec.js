import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../views/Login';

describe('Login component rendering', () => {
  const location = {
    location: {
      pathname: '/',
    },
  };
  const wrapper = shallow(<Login history={location} />);

  it('Should render the component properly', () => {
    expect(wrapper.length).toBe(1);
  });
});
