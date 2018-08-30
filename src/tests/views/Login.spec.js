import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../views/Home';

describe('Login component rendering', () => {
  it('Should render the component properly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('FARGO REACT APP - TEST LOGIN VIEW');
  });
});
