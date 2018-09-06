import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../views/Login';

describe('Login component rendering', () => {
  const wrapper = shallow(<Login />);

  it('Should render the component properly', () => {
    expect(wrapper.length).toBe(1);
  });
});
